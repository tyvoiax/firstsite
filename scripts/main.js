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
