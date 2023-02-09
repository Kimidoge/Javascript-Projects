
// create two variables:
// myLeads = assigned to an empty array
// inputEl = assigned to the text input field

let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");    // const : cannot be reassaigned
const inputBtn = document.getElementById("input-btn");   // const : cannot be reassaigned
const ulEl = document.getElementById("ul-el");
const delBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");


// get leads from localStorage - PS: JSON.parse()
// store it in a variable, leadsFromLocalStorage
//log out the variable

//localStorage.clear();
// ["lead1, "lead2"] or null
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    renderLeads(myLeads)
}
//console.log("leadsFromLocalStorage: " + leadsFromLocalStorage);

// SAVE TAB BUTTON //
tabBtn.addEventListener("click", function(){

    // GRAB URL OF THE CURRENT TAB//
    //chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    //})
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        //console.log(tabs);
         // push item into myLeads array
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));  //stringify first
        renderLeads(myLeads);

    })



   


})

// DELETE BUTTON // 
//2. listen for double clicks on the delete button
//3. when clicked, clear localstorage, myLeads, and the DOM
delBtn.addEventListener("dblclick", function(){
    console.log("clicked twice");
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
    

})


//localStorage variable
//console.log(localStorage.getItem("myLeads"))
//localStorage.setItem("myLeads", "www.examplelead.com");


// push the value "www.awesomelead.com" to myArray when the input button is clicked
//Adding eventListener
inputBtn.addEventListener("click", function(){

    console.log("button clicked from addEventListener");
    myLeads.push(inputEl.value);

    // clearing the input field
    inputEl.value = '';

    // turn the array into a string using JSON.stringify
    // save the myLeads array to LocalStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    renderLeads(myLeads);

    console.log(localStorage.getItem("myLeads"));

})

function renderLeads(leads){
    // 1. create a variable, listItems to hold all the HTML for the list items
    // assign it to an empty string to begin with
    let listItems = ""

    for(let i = 0; i<leads.length; i++){

        //2. Add items to the listItems variable
        //wrap the lead in an anchor tag (<a>) inside the <li>
        //listItems += "<li><a target = '_blank' href = '" +  myLeads[i] + "'>" + myLeads[i]  + "</a></li>";
        listItems += 
        `
        <li>
            <a target = '_blank' href = '${leads[i]}'>${leads[i]}
            </a>
        </li>

        `
    }

    //3. Render the listItems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems; 

}


