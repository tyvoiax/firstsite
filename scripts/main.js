var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!, ty is here!!';

var myImage = document.querySelector('img');
myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/circuit.jpg') {
    myImage.setAttribute('src', 'images/braincircuit.jpg');  
  }
  else {
    myImage.setAttribute('src', 'images/circuit.jpg');  
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter you name.'); 
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Computers are cool, ' + myName; 
}

if(!localStorage.getItem('name') {
  setUserName();     
}
else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Computers are cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();  
}
