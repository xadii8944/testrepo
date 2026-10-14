const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

const eaglesIndex = birds.indexOf("Eagles");
if (eaglesIndex !== -1) {
    birds.splice(eaglesIndex, 1);
}

const eBirds = birds.filter(bird => bird.startsWith("E"));

// Don't edit the code below here!

section.innerHTML = ' ';

const para1 = document.createElement('p');
para1.textContent = eBirds.join(',');

section.appendChild(para1);
