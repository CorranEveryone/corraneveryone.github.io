// document.getElementById("myDIV").style.display = "block"/"none"

// Variable Setup
var points = 0; // This is the currency
var ppc = 1; // Points per Click
var pps = 0; // Points per Second
var item1cost = 10;

// Update the HTML text
function updateHTML() {
    document.getElementById('pointCount').innerHTML = "Points: " + points;
    document.getElementById('item1cost').innerHTML = "Costs: " + item1cost + " Points";
    if (ppc > 1) {
        document.getElementById('ppcCount').innerHTML = "Points Per Click: " + ppc;
        document.getElementById("ppcCount").style.display = "block";
    };
};

// This function is ran everytime the button is clicked
function buttonClicked() {
    points = points + ppc; // Increase Points by the PPC
    updateHTML();
};

function item1Buy() {
    if (points >= item1cost) {
        ppc += 1;
        points -= item1cost;
        item1cost += 1;
        item1cost = Math.round(item1cost * 1.1);
        updateHTML();
    };
};