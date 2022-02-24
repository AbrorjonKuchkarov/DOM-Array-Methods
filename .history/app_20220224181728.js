const addUser = document.getElementById('add-user');
const double = document.getElementById('double');
const showMillionaires = document.getElementById('show-millionaires');
const sort = document.getElementById('sort');
const calculateWealth = document.getElementById('calculate-wealth');

const main = document.querySelector('#main');

let data = [];



async function getRandomUser() {
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
 data.push(newData);

 updateDOM()
}

function updateDOM ( providedData = data ){
   main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`;

   providedData.forEach(item => {
      const element = document.createElement('div');
      element.classList.add('person');
      element.innerHTML = `<strong>${item.name}</strong>${formatMoney(item.money)} `;
      main.appendChild(element)
   })
}

function formatMoney (number){
   return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//Double Money
function doubleMoney () {
   data = data.map(user => {
      return {...user, money:user.money*2}
   })

   updateDOM()
}

//Show only Millionaires by filter
function showMillionaire (){
   data = data.filter(user => user.money > 1000000);

   updateDOM()
}

//Sort by Riches
function sortRich(){
   data = data.sort((a,b) => b.money - a.money);

   updateDOM()
}

// calculate total wealth by reduce
function calculateTotalWealth (){
   const wealth = data.reduce((acc, num) => (acc += num.money), 0 );

   const wealthEl = document.createElement('div');
   wealthEl.innerHTML = `<h3> <strong>Total:</strong> ${formatMoney(wealth)} </h3>`
   main.appendChild(wealthEl);
}

addUser.addEventListener('click', getRandomUser);
double.addEventListener('click', doubleMoney);
showMillionaires.addEventListener('click', showMillionaire);
sort.addEventListener('click', sortRich);
calculateWealth.addEventListener('click', calculateTotalWealth);




