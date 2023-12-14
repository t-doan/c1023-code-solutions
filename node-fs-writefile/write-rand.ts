import { writeFile } from 'node:fs/promises';

async function loadFile(): Promise<void> {
  try {
    const data = Math.random() + '\n';
    await writeFile('random.txt', data, { flag: 'a' });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

loadFile();
