//object key value pairs

let person = {
    name: "Eilham",
    age : 25,
    country: "Malaysia"
}

function logData(){
    sentence = person.name + " is " + person.age + " years old and lives in " + person.country;
    console.log(sentence);
}       

logData();

// conditional if-else statements
let age = 75

if (age < 6){
    console.log("Free of charge");
}

else if (age < 18){
    console.log("child discount")
}

else if (age < 27){
    console.log("student discount")
}

else if (age < 67){
    console.log("full price")
}

else{
    console.log("senior citizen discount")
}

// for loops
let largeCountries = ["China", "India", "USA","Indonesia", "Pakistan"]

for(let i = 0; i < largeCountries.length ; i++){
    console.log("- " + largeCountries[i])

}

// push() pop() shift() unshift()
console.log("")
let bigCountries = ["Tuvalu", "India", "USA","Indonesia", "Monaco"];

bigCountries.pop();
bigCountries.push("Pakistan");

bigCountries.shift();
bigCountries.unshift("China");



for(let i = 0; i < bigCountries.length ; i++){
    console.log("- " + bigCountries[i])

}

// Logical Operators
let dayofMonth = 13;
let weekday = "Friday";

if (dayofMonth === 13 && weekday === "Friday"){
    console.log("omg")
}

// rock paper scissors

let hands = ["rock", "paper", "scissors"]

function gethands(){
    let randomIndex = Math.floor(Math.random()*3);
    return hands[randomIndex];
}

