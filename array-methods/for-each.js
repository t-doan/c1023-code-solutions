const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('in order:');
values.forEach((element) => console.log(element));
console.log('reverse order:');
values.forEach((element) =>
  console.log(values[values.length - 1 - values.indexOf(element)])
);
