const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content';

const redText = document.createElement('p');
redText.style.color = 'red';
redText.textContent = "Hey I'm red!"

const blueText = document.createElement('h3');
blueText.style.color = 'blue';
blueText.textContent = "I'm a blue h3!";

const div = document.createElement('div');
div.classList.add('div');
div.style.cssText = 'border: 1px black solid; background-color: pink;'

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const p = document.createElement('p');
p.textContent = "ME TOO!";


function alertFunction() {
    alert("Yay! YOU dId IT?");
    
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    })
})



const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e){
    console.log(e.target.style.background = 'blue');
})

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('dblclick', () => {
    alert("Hello Again, did you miss me?")
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', alertFunction)


div.appendChild(h1);
div.appendChild(p);

container.appendChild(content,);
container.appendChild(blueText)
container.appendChild(redText);
container.appendChild(div);



