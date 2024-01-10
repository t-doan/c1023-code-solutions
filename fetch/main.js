async function logData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`ErrorL ${response.status}`);
    }
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/156');
    if (!response.ok) {
      throw new Error(`ErrorL ${response.status}`);
    }
    const pokemon = await response.json();
    console.log(pokemon);
  } catch (error) {
    console.log(error);
  }
}

logData();
