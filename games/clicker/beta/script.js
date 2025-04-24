// Version variables and HTML
var isbeta = true;
var majver = 0;
var minver = 0;
var betaver = 8;
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
var item3cost = 140; // Polish Button
var item4cost = 300; // Automanic Button Clicker MkII

// Stats
var totalpoints = 0;
var mostpoints = 0;
var itemsbought = 0;
var firstversion = document.getElementById('version').innerHTML

// Misc. Variables
var autosavetimer = 6000 // 1 tick = 1/100 of a second
var inflation = 0.075 // cost*(1+inflation) = newcost (this is how high a cost goes up when you buy something)

// Update the HTML text
function updateHTML() {
    document.getElementById('pointCount').innerHTML = "Points: " + Math.floor(points);
    document.getElementById('item1cost').innerHTML = "Costs: " + item1cost + " Points";
    document.getElementById('item2cost').innerHTML = "Costs: " + item2cost + " Points";
    document.getElementById('item3cost').innerHTML = "Costs: " + item3cost + " Points";
    document.getElementById('item4cost').innerHTML = "Costs: " + item4cost + " Points";

    document.getElementById('stat1').innerHTML = "Total Points: " + totalpoints;
    document.getElementById('stat2').innerHTML = "Most Points: " + mostpoints;
    document.getElementById('stat3').innerHTML = "Items Bought: " + itemsbought;
    document.getElementById('firstversion').innerHTML = "First Version Played: " + firstversion;

    // Shows Items when Unlocked
    if (points >= 10) { // Upgrade Button
        document.getElementById('item1').style.display = "block";
    };
    if (ppc >= 2) { // Points/Click Count
        document.getElementById('ppcCount').innerHTML = "Points/Click: " + ppc;
        document.getElementById("ppcCount").style.display = "block";
        document.getElementById('item1').style.display = "block";
    };
    if (ppc >= 5) { // Automanic Button Clicker
        document.getElementById('item2').style.display = "block";
    };
    if (pps >= 1) { // Points/s Count
        document.getElementById('ppsCount').innerHTML = "Points/s: " + pps;
        document.getElementById("ppsCount").style.display = "block";
    };
    if (pps >= 10) { // Polish Button
        document.getElementById('item3').style.display = "block";
    };
    if (ppc >= 60) { // Automanic Button Clicker MkII
        document.getElementById('item4').style.display = "block";
    };
};

// This function is ran everytime the button is clicked
function buttonClicked() {
    points += ppc; // Increase Points by the PPC
    totalpoints += ppc;
    updateHTML();
};

// SHOP ITEM FUNCTIONS
function item1Buy() {
    if (points >= item1cost) {
        ppc += 1;
        points -= item1cost;
        item1cost += 1;
        item1cost = Math.round(item1cost * (1+inflation));
        itemsbought += 1;
        updateHTML();
    };
};

function item2Buy() {
    if (points >= item2cost) {
        pps += 1;
        points -= item2cost;
        item2cost += 1;
        item2cost = Math.round(item2cost * (1+inflation));
        itemsbought += 1;
        updateHTML();
    };
};

function item3Buy() {
    if (points >= item3cost) {
        ppc += 8;
        points -= item3cost;
        item3cost += 1;
        item3cost = Math.round(item3cost * (1+inflation));
        itemsbought += 1;
        updateHTML();
    };
};

function item4Buy() {
    if (points >= item4cost) {
        pps += 10;
        points -= item4cost;
        item4cost += 1;
        item4cost = Math.round(item4cost * (1+inflation));
        itemsbought += 1;
        updateHTML();
    };
};

function saveData(method) {
    console.log("Saving game...");

    // Save version data
    saveItem('isthereasave', "yes");
    temp1 = saveItem('firstversion');
    if (temp1 == null) {
        saveItem('firstversion', document.getElementById('version').innerHTML);
    };
    saveItem('version', document.getElementById('version').innerHTML);
    saveItem('isbeta', "true");

    // Save main data
    saveItem('points', Math.floor(points));
    saveItem('ppc', ppc);
    saveItem('pps', pps);

    // Save item costs
    saveItem('item1cost', item1cost);
    saveItem('item2cost', item2cost);
    saveItem('item3cost', item3cost);
    saveItem('item4cost', item4cost);

    // Save stats
    saveItem('totalpoints', totalpoints);
    saveItem('mostpoints', mostpoints);
    saveItem('itemsbought', itemsbought);
    saveItem('firstversion', firstversion);

    console.log("Save complete!");
    if (method == 'button') {
        alert("Save complete!");
    }
};

function saveItem(item, value) {
    localStorage.setItem(savePrefix + item, value);
}

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
temp1 = loadData('isthereasave');
if (temp1 === null) {
    console.log("No save was found.");
} else {
    console.log("Save found, loading save.");

    // Load save data
    temp1 = loadData('points');
    if (temp1 != null) {
        points = parseInt(loadData('points'));
    };
    temp1 = loadData('ppc');
    if (temp1 != null) {
        ppc = parseInt(loadData('ppc'));
    };
    temp1 = loadData('pps');
    if (temp1 != null) {
        pps = parseInt(loadData('pps'));
    };

    // Load item costs
    temp1 = loadData('item1cost');
    if (temp1 != null) {
        item1cost = parseInt(loadData('item1cost'));
    };
    temp1 = loadData('item2cost')
    if (temp1 != null) {
        item2cost = parseInt(loadData('item2cost'));
    };
    temp1 = loadData('item3cost');
    if (temp1 != null) {
        item3cost = parseInt(loadData('item3cost'));
    };
    temp1 = loadData('item4cost')
    if (temp1 != null) {
        item4cost = parseInt(loadData('item4cost'));
    };

    // Stats
    temp1 = loadData('totalpoints')
    if (temp1 != null) {
        totalpoints = parseInt(loadData('totalpoints'));
    };
    temp1 = loadData('mostpoints');
    if (temp1 != null) {
        mostpoints = parseInt(loadData('mostpoints'));
    };
    temp1 = loadData('itemsbought')
    if (temp1 != null) {
        itemsbought = parseInt(loadData('itemsbought'));
    };
    temp1 = loadData('firstversion')
    if (temp1 != null) {
        firstversion = loadData('firstversion');
    };

    console.log("Save loaded.")
};

function loadData(item) {
    return localStorage.getItem(savePrefix + item);
};

// Enable the button
document.getElementById('mainButton').innerHTML = "I AM BUTTON";
document.getElementById('mainButton').disabled = false;
updateHTML(); // Also updateHTML() to get all of the save data to show up on the screen

setInterval(secondHasPassed, 10);

function secondHasPassed() {
    points += pps/100;
    totalpoints += pps/100;
    autosavetimer -= 1;
    if (autosavetimer <= 0) {
        autosavetimer = 6000
        saveData('auto');
    };
    if (points > mostpoints) {
        mostpoints = points;
    };
    updateHTML();
};