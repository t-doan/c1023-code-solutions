interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesinIrvine?: boolean;
  previousOccupation?: string;
}

const student: StudentProps = { firstName: 'Tai', lastName: 'Doan', age: 26 };

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('fullName:', fullName);

student.livesinIrvine = false;
console.log('livesinIrvine:', student.livesinIrvine);

student.previousOccupation = 'Sales';
console.log('previousOccupation:', student.previousOccupation);

console.log('student:', student);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = { make: 'Hyundai', model: 'Elantra', year: 2020 };

vehicle['color'] = 'black';
console.log('color:', vehicle.color);

vehicle['isConvertible'] = false;
console.log('isConvertible:', vehicle.isConvertible);

console.log('vehicle:', vehicle);

interface Pet {
  name?: string;
  kind: string;
}
const pet: Pet = { name: 'Fido', kind: 'dog' };
delete pet.name;
delete pet.kind;
console.log('pet:', pet);
