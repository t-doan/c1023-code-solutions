/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const firstName = person.firstName;
  const lastName = person.lastName;
  const initials = firstName.charAt(0) + lastName.charAt(0);
  return initials;
}
