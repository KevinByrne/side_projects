/* myImage variable set, use document.querySelector to select 'img' tag in html file */

const myImage = document.querySelector('img');

/* 
myImage has .onclick event handler assigned
mySrc variable created to retrieve the image 'src' attribute
condtional is created and value set to check the path of the original image is equal to that given in mySrc variable.
if mySrc is true, it changes the 'src' value to the second image therefore changing the presented image on the browser
if it isn't true the src value swaps to original path

User journey is as follows

User click on block1.png image >> JS .onclick checks path of image when clicked >> is it images/block1.png >> yes >> changes to images/block1.png >> is it images/block1.png >> no >> changes to images/block1.png 
*/

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/block1.png') {
    myImage.setAttribute('src', 'images/headshot.jpg');
  } else {
    myImage.setAttribute('src', 'images/block1.png');
  }
};

let myButton = document.querySelector('button'); /* myButton variable set, .querySelector method called and 'button' tag passed as an argument */

let myHeading = document.querySelector('h1'); /* myHeading variable set, .querySelector method called and 'h1' tag passed as an argument */

function setUserName () { /* setUserName function created with no argument given */
  const myName = prompt('Please enter your name.'); /* myName variable set and prompt function called with string as argument, this is different to .alert as it prompts for user input which is stored in the myName variable */
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName); /* localStorage is an API which stores data in browser and retrieves it later  .setItem stores a data item called name which is assigned the value of the myName variable */
    myHeading.textContent = `This is pretty awesome isn't it, ${myName}`; /* myHeading variable calls .textContent and sets this to a string with an invocation of myName variable */
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `This is cool also, ${storedName}`;
};

myButton.onclick = () => {
  setUserName();
};