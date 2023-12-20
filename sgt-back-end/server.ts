import pg from 'pg';
import express from 'express'
import { ClientError } from './client-error.js'

const app = express();

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try{
    const sql = `
      select *
        from "grades";
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  }
  catch(e){
    next(e);
  };

});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    // validate the inputs FIRST
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }
    // Ok, the input is reasonable, time to query the database.
    // We are NOT putting the user input directly into our query;
    // instead, we are sending the user input in a separate array.
    /*
     * Review the documentation on parameterized queries here:
     * https://node-postgres.com/features/queries#parameterized-query
     * You'll be using this technique to prevent SQL injection attacks.
     *
     * https://www.youtube.com/watch?v=_jKylhJtPmI
     */
    const sql = `
      select *
        from "grades"
        where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    // If we get here, the query succeeded, even if nothing was found.
    // The Result object will include an array of rows.
    // See the docs on results: https://node-postgres.com/apis/result
    const grade = result.rows[0];
    if (!grade) {
      // We could not have known ahead of time without actually querying the db,
      // but the specific grade being requested was not found in the database.
      throw new ClientError(404, `Cannot find grade with "gradeId" ${gradeId}`);
    }
    // The specific grade was found in the database, yay! Return it.
    res.json(grade);
  } catch (err) {
    // The query failed for some reason
    // possibly due to a syntax error in the SQL statement;
    // send `err` to the error handling middleware
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try{
    const {name, course, score} = req.body;

    if (!name || !course || !score || isNaN(score) || score < 0 || score > 100){
      throw new ClientError(400, 'Invalid input data. Please provide name, course, a valid score between 0 and 100');
    }

    const sql = `
      insert into "grades" ("name", "course", "score")
        values ($1, $2, $3)
        returning *;
      `;

    const params = [name, course, score];

    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);

  }
  catch(e){
    next(e);
  };
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    const { name, course, score } = req.body;
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }
    if (!name || !course || !score || isNaN(score) || score < 0 || score > 100){
    throw new ClientError(400, 'Invalid input data. Please provide name, course, a valid score between 0 and 100');
    }

    const sql = `
      update "grades"
        set "name" = $1,
            "course" = $2,
            "score" = $3
        where "gradeId" = $4
        returning *;
      `;

    const params = [name, course, score, gradeId];
    const result =  await db.query(sql, params);
    if(result.rows.length > 0){
      res.status(200).json(result.rows[0]);
    }
    else{
      throw new ClientError(404, "Cannot find gradeId in database");
    }
  } catch (e) {
    next(e);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }
    const sql = `
    delete
      from "grades"
      where "gradeId" = $1
      returning *;
    `;

    const params = [gradeId];
    const result = await db.query(sql, params);
    if (result.rows.length > 0){
      res.sendStatus(204);
    }
    else{
      throw new ClientError(404, 'Cannot find gradeId in database');
    }
  } catch (e) {
    next(e);
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
