const bodyElement = document.querySelector('body')

const inputElement = document.createElement('input')
bodyElement.append(inputElement)

const removebuttonElement = document.createElement('button')
let remove = document.createTextNode("Remove");
removebuttonElement.appendChild(remove);  
bodyElement.append(removebuttonElement)

removebuttonElement.addEventListener ("click", function(){
    
})

const buttonElement = document.createElement('button')
let clear = document.createTextNode("Clear");
buttonElement.appendChild(clear);  
bodyElement.append(buttonElement)

const mainElement = document.createElement('main')
bodyElement.append(mainElement)

buttonElement.addEventListener ("click", function(){
    mainElement.remove(mainElement)
})

const imgElement = document.createElement('img')
imgElement.src = 'Picture/9eyyag09rax41.jpg';
imgElement.style.width = '300px'; 
imgElement.classList.add('image')
mainElement.append(imgElement)

const linkElement = document.createElement('a')
let link = document.createTextNode("This is a link"); 
linkElement.appendChild(link);  
linkElement.classList.add('link')
linkElement.href = "https://www.bing.com";  
mainElement.append(linkElement)