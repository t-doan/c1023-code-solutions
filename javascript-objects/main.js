const student = { firstName: 'Tai', lastName: 'Doan', age: 26 };

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
console.log('value of student.livesInIrvine:', student.livesInIrvine);

student.previousOccupation = 'Warehouse worker';
console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('value of student:', student);

const vehicle = { make: 'Hyundai', model: 'Elantra', year: 2020 };

vehicle['color'] = 'black';
console.log('value of vehicle.color:', vehicle.color);

vehicle['isConvertible'] = false;
console.log('value of vehicle.isConvertible:', vehicle.isConvertible);

console.log('value of vehicle:', vehicle);

const pet = { name: 'Fido', type: 'Dog' };
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
