/* Messes with further code
const myHeading = document.querySelector('h1');
// Query Selector grabs a reference from the HTML, this time being the heading
//myHeading.textContent = 'Hello world!';
// Updates the text content of the grabbed reference
*/

let myVariable = 'Bob';
/* You can declare a variable with var as well, but it is less recommended, look up the differences later
Variables can hold many different data types, and arrays are not required to be the same type
Equality statements are done by 3 equals. myVariable === 'Bob'. Does not equal is !== */

let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
    alert('Yay, I love chocolate ice cream!');
} else {
    alert('Awww, but chocolate is my favorite...');
}
/* If the values are equal, will make a notification of them loving chocolate ice cream.
When loading the page, I can see it popup with loving chocolate ice cream. */

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
}
// Try this function out in the console. Defining functions is very similar to Java definitions

/* Website interactivity depends on event handlers, especially ones such as onclick events.
There are two ways to make an event handler work:
- document.querySelector('html').onclick = function() {};
- let myHTML = document.querySelector('html'); 
  myHTML.onclick = function() {}; */

/*  Messes with further code
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
} */

// The above code makes the page respond to being clicked

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox2.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}

/* Use of everything thus far, with my custom input image, my pet mantis!
This gets the src attribute, which is the path to the original image in this context */

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}
/* Opens up a dialogue box for input, and save that name to localstorage for further use
This updates the heading to use said input. There also is a case check to make sure it is not empty when submitted */

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

// Initialization code that calls this at the start as long as the username does not exist, otherwise ignored

myButton.onclick = function() {
    setUserName();
}

// Sets the button so you can click it to change your username