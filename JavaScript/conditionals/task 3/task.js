let machineActive = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

// Add your code here
machineResult = machineActive ? 'Machine is on.' : 'Machine is off.';
pwdResult = machineActive && pwd === 'cheese' ? 'Login successful.' : 'Login unsuccessful.';

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = machineResult;
para2.textContent = pwdResult;

section.appendChild(para1);
section.appendChild(para2);
