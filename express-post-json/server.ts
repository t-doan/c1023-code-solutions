import express from 'express';

const app = express();

let nextId = 1;

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray: Grade[] = [];
  for (const x in grades) {
    gradesArray.push(grades[x]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.sendStatus(404);
  } else {
    if (Object.keys(req.body).length === 3) {
      const newGrade: Grade = {
        id: nextId++,
        name: req.body.name,
        course: req.body.course,
        score: req.body.score,
      };

      grades[newGrade.id] = newGrade;
      res.status(201).json(newGrade);
    } else {
      res.sendStatus(404);
    }
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
