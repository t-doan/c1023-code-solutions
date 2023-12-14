import { writeFile, readFile } from 'node:fs/promises';

const copyFile = process.argv[3];
async function loadFile(contents: string): Promise<void> {
  try {
    const data = contents;
    await writeFile(copyFile, data, { flag: 'w' });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

const fileName = process.argv[2];
async function logFile(): Promise<void> {
  try {
    const contents = await readFile(fileName, { encoding: 'utf8' });
    loadFile(contents);
  } catch (e) {
    console.error(e);
  }
}

logFile();
