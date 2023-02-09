
/*
Passanger Counter App : to keep track and count number of passangers at the train
station.
*/

// assigning variables

/* 
Procedures:
1. initialize the count as 0
2. listen for clicks on the increment button
3. increment the count variable when the button is clicked
4. change the count-el variable in the HTML to reflect the new count
*/


//1. initialize the count as 0
let count = 0;  // variable to hold number of people 

// grabbing elementsd from HTML document
let countEl = document.getElementById("count-el");  //linking with HTML code
let welcomeEl = document.getElementById("welcome-el");
let saveEl = document.getElementById("save-el");

console.log(saveEl);
let myName = "Eilham Hakimie";
greeting = "Welcome back, ";
myGreeting = greeting + myName;

welcomeEl.innerText = myGreeting;

console.log(countEl);

//2. function for incrementing the count
function increment(){

    count += 1;
    
    console.log("increment");
    console.log(count);
    countEl.innerText = count; // increment innerText (count-el)

}

// function to decrement count
function decrement(){

    count-=1;
    console.log("Decrement");
    countEl.innerText = count;
}

//function to reset the count
function reset(){
    count = 0;
    console.log("reset");
    countEl.innerText = count;
}

function save(){
    let countStr = count + " - "
    saveEl.textContent = saveEl.textContent + countStr;
    console.log(count);
}

