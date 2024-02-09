// Old code used to build this game: https://replit.com/@CorranTIM/Click-Da-Button#script.js

// Bookmark Cheats
// javascript: (() => {  points = 1000;})();

// Variable Setup
var points = 0; // This is the currency
var ppc = 1; // Points per Click
var pps = 0; // Points per Second

// Update the HTML text
function updateHTML() {
    document.getElementById('info1').innerHTML = "Points: " + clicks;
};

// This function is ran everytime the button is clicked
function buttonClicked() {
    var points = points + ppc; // Increase Points by the PPC
    updateHTML();
};