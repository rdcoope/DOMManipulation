const link = document.querySelector("a");

link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";


// p tag editing
const sect = document.querySelector("section");
const para = document.createElement("p");
    para.textContent = "We hope you enjoyed the ride.";
    para.style.cssText = 'color: white; background-color: black; padding: 10px; width: 250px; text-align: center;'

sect.appendChild(para);

const text = document.createTextNode(
    " -- the premier source for web development knowledge."
);
const linkPara = document.querySelector('p');
linkPara.appendChild(text)

sect.appendChild(linkPara);
// sect.removeChild(linkPara);

const stylesheets = Document.stylesheets
console.log(stylesheets)