// Version variables and HTML
var isbeta = true;
var majver = 0;
var minver = 0;
var betaver = 6;
if (isbeta = false) {
    document.getElementById('version').innerHTML = "v1." + majver + "." + minver;
    savePrefix = "clicker/"
} else if (isbeta = true) {
    document.getElementById('version').innerHTML = "v1." + majver + "." + minver + "." + betaver;
    savePrefix = "clicker/beta/"
};
console.log("Just a Clicker Game " + document.getElementById('version').innerHTML);

// Init Temp Variables (They are used to load data into if statements)
var temp1 = "";

// Variable Setup
var points = 0; // This is the currency
var ppc = 1; // Points per Click
var pps = 0; // Points per Second

// Shop Item Costs
var item1cost = 10; // Upgrade Button
var item2cost = 25; // Automanic Button Clicker

// Update the HTML text
function updateHTML() {
    document.getElementById('pointCount').innerHTML = "Points: " + Math.floor(points);
    document.getElementById('item1cost').innerHTML = "Costs: " + item1cost + " Points";
    document.getElementById('item2cost').innerHTML = "Costs: " + item2cost + " Points";
    if (points >= 10) {
        document.getElementById('item1').style.display = "block";
    };
    if (ppc > 1) {
        document.getElementById('ppcCount').innerHTML = "Points/Click: " + ppc;
        document.getElementById("ppcCount").style.display = "block";
        document.getElementById('item1').style.display = "block";
    };
    if (ppc > 4) {
        document.getElementById('item2').style.display = "block";
    };
    if (pps > 0) {
        document.getElementById('ppsCount').innerHTML = "Points/s: " + pps;
        document.getElementById("ppsCount").style.display = "block";
    };
};

// This function is ran everytime the button is clicked
function buttonClicked() {
    points = points + ppc; // Increase Points by the PPC
    updateHTML();
};

// SHOP ITEM FUNCTIONS
function item1Buy() {
    if (points >= item1cost) {
        ppc += 1;
        points -= item1cost;
        item1cost += 1;
        item1cost = Math.round(item1cost * 1.1);
        updateHTML();
    };
};

function item2Buy() {
    if (points >= item2cost) {
        pps += 1;
        points -= item2cost;
        item2cost += 1;
        item2cost = Math.round(item2cost * 1.1);
        updateHTML();
    };
};

function saveData() {
    console.log("Saving game...");

    // Save version data
    localStorage.setItem(savePrefix + 'isthereasave', "yes");
    temp1 = localStorage.getItem(savePrefix + 'firstversion');
    if (temp1 == null) {
        localStorage.setItem(savePrefix + 'firstversion', document.getElementById('version').innerHTML);
    };
    localStorage.setItem(savePrefix + 'version', document.getElementById('version').innerHTML);
    localStorage.setItem(savePrefix + 'isbeta', "true");

    // Save main data
    localStorage.setItem(savePrefix + 'points', Math.floor(points));
    localStorage.setItem(savePrefix + 'ppc', ppc);
    localStorage.setItem(savePrefix + 'pps', pps);

    // Save item costs
    localStorage.setItem(savePrefix + 'item1cost', item1cost);
    localStorage.setItem(savePrefix + 'item2cost', item2cost);

    console.log("Save complete!");
    alert("Save complete!");
};

function promptDeleteSave() {
    document.getElementById('deletesaveprompt').style.display = "block";
};

function closeDeleteSave() {
    document.getElementById('deletesaveprompt').style.display = "none";
};

function deleteSave() {
    localStorage.removeItem(savePrefix + 'isthereasave');
    window.location.reload();
};

// Load save data
temp1 = localStorage.getItem(savePrefix + 'isthereasave')
if (temp1 === null) {
    console.log("No save was found.");
} else {
    console.log("Save found, loading save.");

    // Load save data
    temp1 = localStorage.getItem(savePrefix + 'points');
    if (temp1 != null) {
        points = parseInt(localStorage.getItem(savePrefix + 'points'));
    };
    temp1 = localStorage.getItem(savePrefix + 'ppc');
    if (temp1 != null) {
        ppc = parseInt(localStorage.getItem(savePrefix + 'ppc'));
    };
    temp1 = localStorage.getItem(savePrefix + 'pps');
    if (temp1 != null) {
        pps = parseInt(localStorage.getItem(savePrefix + 'pps'));
    };

    // Load item costs
    temp1 = localStorage.getItem(savePrefix + 'item1cost');
    if (temp1 != null) {
        item1cost = parseInt(localStorage.getItem(savePrefix + 'item1cost'));
    };
    temp1 = localStorage.getItem(savePrefix + 'item2cost');
    if (temp1 != null) {
        item1cost = parseInt(localStorage.getItem(savePrefix + 'item2cost'));
    };

    console.log("Save loaded.")
};

// Enable the button
document.getElementById('mainButton').innerHTML = "I AM BUTTON";
document.getElementById('mainButton').disabled = false;
updateHTML(); // Also updateHTML() to get all of the save data to show up on the screen

setInterval(secondHasPassed, 10);

function secondHasPassed() {
    points += pps/100;
    updateHTML();
};