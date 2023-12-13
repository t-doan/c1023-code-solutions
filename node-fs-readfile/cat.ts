import { readFile } from 'node:fs/promises';

const filePath = [];
for (let i = 2; i < process.argv.length; i++) {
  const fileName = process.argv[i];
  filePath.push(fileName);
}

logFile(filePath);
async function logFile(filePath: Array<string>): Promise<void> {
  try {
    const contents = await Promise.all(
      filePath.map((x: string) => readFile(x, { encoding: 'utf8' }))
    );
    console.log(contents.join(''));
  } catch (e) {
    console.error(e);
  }
}
