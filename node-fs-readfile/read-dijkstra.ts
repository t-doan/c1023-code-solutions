import { readFile } from 'node:fs/promises';

async function logFile(): Promise<void> {
  try {
    const contents = await readFile('dijkstra.txt', { encoding: 'utf8' });
    console.log(contents);
  } catch (e) {
    console.error(e);
  }
}

logFile();
