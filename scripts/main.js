let myHeading = document.querySelector('h1');
myHeading.textContent = ("Hello World");

let myImage = document.querySelector('img');

myImage.onclick = function () {
    /* body... */
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/DoubleExposeJorge.jpg'){
        myImage.setAttribute('src', 'images/MountainLake.jpg');
    }
    else{
        myImage.setAttribute('src', 'images/DoubleExposeJorge.jpg');
    }
}

let myButton = document.querySelector('button');
myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = "This is " + myName + "'s profile page.";

}

if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "This is " + storedName + "'s profile page.";
}

myButton.onclick = function () {
    /* body... */
    setUserName();
}