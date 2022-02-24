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

   addData(newData);
}

getRandomUser();
getRandomUser();
getRandomUser();

// Add newuser to Data array
function addData(newData){
   return data.push(newData);

   updateDOM();
}

function updateDOM ( providedData = data ){
   main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`;

   providedData.forEach(item => {
      const element = document.createElement('div');
      element.classList.add('person');
      element.innerHTML = `<h2><strong>${item.name}</strong>${item.money} </h2>`
      main.appendChild(element)

   })


}


