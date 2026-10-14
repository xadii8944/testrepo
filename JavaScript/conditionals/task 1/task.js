let season = 'summer';
let response;

// Add your code here
if (season.includes('summer')) {
    response = "It's summer!";
} else if (season.includes('winter')) {
    response = "It's winter!";
} else {
    response = "We don't know what season it is.";
}

// Don't edit the code below here!

const section = document.querySelector('.preview');
section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);
