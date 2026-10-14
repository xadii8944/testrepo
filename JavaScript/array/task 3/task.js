let myArray = ["Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri"];

// Add your code here
myArray.pop();

myArray.push("Blanka", "Dhalsim");

myArray = myArray.map((name, index) => `${name} (${index})`);

let myString = myArray.join("-");

// Don't edit the code below here!

section.innerHTML = ' ';

let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);
