import { writeFile } from 'node:fs/promises';

async function loadFile(): Promise<void> {
  try {
    const data = '\nNew Input:\n' + process.argv.slice(2).join('\n');
    await writeFile('note.txt', data, { flag: 'a' });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

loadFile();
