const bodyElement = document.querySelector('body')

const buttonElement = document.createElement('button')
let remove = document.createTextNode("Remove");
buttonElement.appendChild(remove);  
bodyElement.append(buttonElement)

const mainElement = document.createElement('main')
bodyElement.append(mainElement)

const imgElement = document.createElement('img')
imgElement.src = 'Picture/9eyyag09rax41.jpg';
imgElement.style.width = '300px'; 
imgElement.classList.add('image')
mainElement.append(imgElement)

const linkElement = document.createElement('a')
let link = document.createTextNode("This is a link"); 
linkElement.appendChild(link);  
linkElement.classList.add('link')
linkElement.href = "https://www.google.com";  
mainElement.append(linkElement)