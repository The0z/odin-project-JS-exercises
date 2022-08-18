// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const redP = document.createElement('p');
redP.innerText = "Hey I'm red!";
redP.style.color = 'red';

const h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3!";
h3.style.color = 'blue'

container.appendChild(content);
container.appendChild(redP);
container.appendChild(h3);

const content2 = document.createElement('div');
content2.id = 'another-div';

const h1 = document.createElement('h1');
h1.innerText = "I'm in a div";

const p = document.createElement('p');
p.innerText = "Me too!";
content2.appendChild(h1);
content2.appendChild(p);

container.appendChild(content2);