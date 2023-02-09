// Calculator challenge
// create four functions: add(), subtract(), divide(), multiply()
//call the correct function when the user clicks on one of the buttons
// perform the given calculations using num1 and num2
// render the result of the calculation inthe paragraph with id="sum-el"

// create four functions: add(), subtract(), divide(), multiply()

let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-el");
console.log("test");

function add(){
    //sumEl.textContent = " ";
    console.log("adding");
    let sum = num1 + num2;
    sumEl.textContent =  "Sum: " + sum;
    
}

function subtract(){
    //sumEl.textContent = " ";
    console.log("subtracting");
    let sum = num1 - num2;
    sumEl.textContent = "Sum: " + sum;
    

}

function divide(){
    //sumEl.textContent = " ";
    console.log("dividing");
    let sum = num1 / num2;
    sumEl.textContent =  "Sum: " + sum;
    
}

function multiply(){
    //sumEl.textContent = " ";
    console.log("multiplying");
    let sum = num1 * num2;
    sumEl.textContent =  "Sum: " + sum;
    
}
