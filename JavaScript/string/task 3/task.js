const quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Add your code here

const fixedQuote = quote.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()); // Correcting the sentence case
const replacedQuote = fixedQuote.replace('Green eggs and ham', 'Brussels sprouts'); // Replacing "green eggs and ham" with "Brussels sprouts"
const finalQuote = replacedQuote.endsWith('.') ? replacedQuote : replacedQuote + '.'; // Adding a period at the end if it's missing

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = fixedQuote;
const para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);
