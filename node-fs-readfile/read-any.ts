import { readFile } from 'node:fs/promises';

const fileName = process.argv[2];

async function logFile(): Promise<void> {
  try {
    const contents = await readFile(fileName, { encoding: 'utf8' });
    console.log(contents);
  } catch (e) {
    console.error(e);
  }
}

logFile();
