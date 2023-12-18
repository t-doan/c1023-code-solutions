import express from 'express';
import { writeFile, readFile } from 'fs/promises';

const dataFile = await readFile('data.json', 'utf-8');
let data = JSON.parse(dataFile);
const app = express();
app.use(express.json());

type Note = {
  id: number;
  content: string;
};

function read(): object[] {
  const noteArray: object[] = [];
  for (const note in data.notes) {
    noteArray.push(data.notes[note]);
  }
  return noteArray;
}

app.get('/api/notes', (req, res) => {
  res.status(200).json(read());
});

app.get('/api/notes/:id', (req, res) => {
  const id = +req.params.id;
  if (isNaN(id) || id <= 0) {
    return res
      .status(400)
      .json({ error: 'Invalid! Id must be a positive integer' });
  }

  const noteArray = read();
  const note = noteArray.find((n) => n.id === id);
  if (note) {
    return res.status(200).json(note);
  } else {
    return res.status(404).json({ error: 'Invalid Id does not exist' });
  }
});

async function create(newNote: Note): Promise<void> {
  data.notes[newNote.id] = newNote;
  data = JSON.stringify(data, null, 2);
  await writeFile('data.json', data, 'utf-8');
}

app.post('/api/notes', (req, res) => {
  if (!req.body.content || req.body.content.match(/^ *$/)) {
    return res.status(400).json({ error: 'content is a required field' });
  } else {
    const newNote: Note = {
      id: data.nextId,
      content: req.body.content,
    };
    try {
      create(newNote);
      data.nextId++;
      return res.status(201).json(newNote);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An unexpected error occurred.' });
    }
  }
});

async function remove(note: Note): Promise<void> {
  delete data.notes[note.id];
  data = JSON.stringify(data, null, 2);
  await writeFile('data.json', data, 'utf-8');
}

app.delete('/api/notes/:id', (req, res) => {
  const id = +req.params.id;
  if (isNaN(id) || id <= 0) {
    return res
      .status(400)
      .json({ error: 'Invalid! Id must be a positive integer' });
  }
  if (data.notes[id]) {
    try {
      remove(data.notes[id]);
      return res.sendStatus(204);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An unexpected error occurred.' });
    }
  } else {
    return res.status(404).json({ error: 'Invalid! ID is not found' });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = +req.params.id;
  const note = req.body.content;
  if (isNaN(id) || id <= 0 || !note || note.match(/^ *$/)) {
    return res.status(400).json({
      error:
        'Invalid! ID must be a positive integer and content must not be empty',
    });
  }
  if (data.notes[id]) {
    const editNote = data.notes[id];
    editNote.content = note;
    try {
      update(editNote);
      return res.status(200).json(editNote);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'An unexpected error occurred.' });
    }
  } else {
    return res.status(404).json({ error: 'Invalid! ID does not exist' });
  }
});

async function update(note: Note): Promise<void> {
  for (const n in data.notes) {
    if (note.id.toString() === n) {
      data.notes[note.id] = note;
      data = JSON.stringify(data, null, 2);
    }
  }
  await writeFile('data.json', data, 'utf-8');
}

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
