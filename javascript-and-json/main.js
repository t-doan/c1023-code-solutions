const books = [
  {
    isbn: '978-0131103627',
    title: 'C Programming Language',
    author: 'Brian W. Kernighan',
  },
  {
    isbn: '978-1118531648',
    title: 'JavaScript and jQuery: Interactive Front-End Web Development',
    author: 'Jon Duckett',
  },
  { isbn: '978-0394800011', title: 'The Cat in the Hat', author: 'Dr. Seuss' },
];

console.log('array of books:', books);
console.log('typeof books:', typeof books);

const jsonBooks = JSON.stringify(books);
console.log('JSON array to string:', jsonBooks);
console.log('typeof jsonBooks:', typeof jsonBooks);

const students = '{"name":"Tom","id":619202}';

console.log('JSON String of student:', students);
console.log('typeof:', typeof students);
const jsonStudents = JSON.parse(students);

console.log('JSON string to object:', jsonStudents);
console.log('typeof jsonStudents:', typeof jsonStudents);
