import { writeFile, readFile } from 'node:fs/promises';

type Data = {
  nextId: number;
  notes: Record<string, string>;
};

const openFile = await readFile('data.json', 'utf8');
let Data = JSON.parse(openFile);

function operation(): string {
  const command = process.argv[2];
  if (command === 'read') {
    read();
  } else if (command === 'update') {
    update();
  } else if (command === 'create') {
    create();
  } else if (command === 'delete') {
    remove();
  } else {
    return 'Invalid command';
  }
}

async function read(): Promise<void> {
  for (const entry in Data.notes) {
    console.log(entry + ': ' + Data.notes[entry]);
  }
}

async function update(): Promise<void> {
  const entryId = process.argv[3];
  const data = process.argv[4];
  for (const entry in Data.notes) {
    if (entry === entryId) {
      Data.notes[entry] = data;
      Data = JSON.stringify(Data, null, 2);
    }
  }
  await writeFile('data.json', Data, { flag: 'w' });
}

async function create(): Promise<void> {
  const entry = process.argv[3].toString();
  Data.notes[Data.nextId] = entry;
  Data.nextId++;
  Data = JSON.stringify(Data, null, 2);
  await writeFile('data.json', Data, { flag: 'w' });
}

async function remove(): Promise<void> {
  const entryId = process.argv[3];
  for (const entry in Data.notes) {
    if (entry === entryId) {
      delete Data.notes[entry];
      Data = JSON.stringify(Data, null, 2);
    }
  }
  await writeFile('data.json', Data, { flag: 'w' });
}

try {
  operation();
} catch (e) {
  console.log(e);
}
