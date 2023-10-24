/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  const name = person.name;
  const occupation = person.occupation;
  const birthPlace = person.birthPlace;

  const description =
    name + ' is a ' + occupation + ' from ' + birthPlace + '.';
  return description;
}
