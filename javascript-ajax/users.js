const $userList = document.querySelector('#user-list');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for (const user of xhr.response) {
    const newLi = document.createElement('li');
    newLi.textContent = user.name;
    $userList.appendChild(newLi);
  }
});
xhr.send();
