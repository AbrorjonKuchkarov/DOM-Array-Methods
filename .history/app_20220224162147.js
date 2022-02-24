const addUser = document.getElementById('add-user');
const double = document.getElementById('double');
const showMillionaires = document.getElementById('show-millionaires');
const sort = document.getElementById('sort');
const calculateWealth = document.getElementById('calculate-wealth');

const main = document.querySelector('#main');

let data = [];

getRandomUser()

const  getRandomUser = async () => {
   const res = await fetch('https://randomuser.me/api');
   const users = await res.json();

   console.log(users);
}


