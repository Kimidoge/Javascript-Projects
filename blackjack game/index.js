// BLACKJACK GAME

//1. Create two variables, firstCard and secondCard
// set their values to a random number between 2-11


let cards = [];    // array - ordered list of items
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

console.log(cards);

//Document Object Model (DOM)
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// player object
let player = {
    name : "Eilham",
    chips : 200
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " : $" + player.chips;

//console.log(sum);

function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1;

    if (randomCard > 10){
        return 10;

    }
    else if (randomCard === 1){
        return 11;

    }
    else{
        return randomCard;
    }
    
}



function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();

}

function renderGame(){
    //cardsEl.textContent = "Cards: " +cards[0] + " " + cards[1]+ " ";
    cardsEl.textContent = "Cards: "
    for( let i = 0; i<cards.length; i++){
        
        cardsEl.textContent += cards[i] + " ";


    }

    sumEl.textContent = "Sum: " + sum;
   
    if (sum <= 20){
        message = "Do you want to draw a new card?";
        
    }
    
    else if (sum === 21){
        message ="Wohoo! You've got blackjack";
        hasBlackJack = true;
       
    }
    
    else {
        message ="You're out of the game";
        isAlive = false;
       
    }

    messageEl.textContent = message;
}

function newCard(){

    /* ONLY allow player to get a new card if she IS alive and 
    does not have blackjack
    */

    if(isAlive === true && hasBlackJack === false){
        console.log("drawing new card");
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        console.log(cards)
        renderGame();
    }
}


// CASH OUT

/*
// ARRAYS
let featuredPosts = ["Check out my netflix code",
                    "project code", 
                    "portfolio"
                    ]

console.log(featuredPosts.length)

// adding and removing items in array
let arrayCards = [7, 4]
arrayCards.push(6)
console.log(arrayCards)

// practice
let chat = ["hey man", "im great dude", "nice to hear"];
let newChat = "awesome dude";
chat.push(newChat);
console.log(chat);
chat.pop();
console.log(chat);



// COUNTING IN JAVASCRIPT USING WHILE-LOOPS
        //start   ;  finish ;  step size
for (let count = 1; count<11; count+=1 ){
    //console.log(count);
}

for (let count = 10; count <101 ; count+=10){
  //  console.log(count);
}

// iterating through arrays using for loops
let chat = ["hey man", "im great dude", "nice to hear"];

for( let i = 0; i<chat.length; i++){
    console.log(chat[i]);
}

let arrayCards = [7, 4, 3];
for (let i = 0; i < arrayCards.length; i++){
    console.log(arrayCards[i])
}

// for-loops, arrays and DOM
let sentence =["hello", "my", "name", "is", "Eilham"];
let greetingEl = document.getElementById("greeting-el");

for(let i = 0; i<sentence.length; i++){
    
    greetingEl.textContent += sentence[i] + " ";
    
}


// RETURNING VALUES FROM A FUNCTION
let player1Time =102;
let player2Time =107;

function getFast(){
    if(player1Time>player2Time){
        return player1Time;
 
    }
    else{
        return player2Time;
    }
}

function totalTime(){
    let sum = player1Time + player2Time;
    return sum;
}
let fastest = getFast();
let totaltime = totalTime();
console.log(totaltime);
console.log(fastest);


// Logical Operators
let hasSolvedChallenge = false;
let hasHintsLeft = false;

if(hasSolvedChallenge === false && hasHintsLeft === false){
    showSolution();
}

function showSolution(){
    console.log("showing the solution...")
}


//OBJECTS - store data in-depth - composite / complex data types
//key-value pairs


let castle = {
    title : "live like a king in my castle",
    price : 190,
    isSuperHost : true,
    images : ["img/castle1.png", "img/castle2.png"]

}
console.log(castle.title)
console.log(castle.price)
*/
let randomNumber = Math.floor(Math.random() * 6) + 1
//console.log(randomNumber)

function rollDice(){
    let randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}

//console.log(rollDice())