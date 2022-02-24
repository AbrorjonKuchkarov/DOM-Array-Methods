const addUser = document.getElementById('add-user');
const double = document.getElementById('double');
const showMillionaires = document.getElementById('show-millionaires');
const sort = document.getElementById('sort');
const calculateWealth = document.getElementById('calculate-wealth');

const main = document.querySelector('#main');

let data = [];



const  getRandomUser = async () => {
   const res = await fetch('https://randomuser.me/api');
   const users = await res.json();

   const user = users.results[0];
   
   const newData = {
      name: `${user.name.first} ${user.name.last}`,
      money: Math.floor(Math.random()*1000000)
   }

   console.log(newData);
}

getRandomUser()


