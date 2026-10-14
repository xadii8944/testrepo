// Add your code here
let myArray = ['Pizza', 'Sushi', 'Burgers']; 

myArray[0] = 'Pasta';
myArray[1] = 'Ramen';

myArray.unshift('Tacos');

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Array: ${myArray}`;

section.appendChild(para1);
