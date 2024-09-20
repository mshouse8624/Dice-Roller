// this method will get the value that the user selected from the 
// attacker drop down menu and then return that value as a number
function getElementAttackerDropDown() {
    // this gets the id 
    let dropDownValue = document.getElementById("attacker-drop-down").value;
    
    // this will now conver the value to a number and return the value
    dropDownValue = Number(dropDownValue);

    // thism then returns the number that the user selected 
    // from the drop down menu
    return dropDownValue;
}

// this method will roll the dice for the attacker dice
function rollAttackerDice() {
    /* this will first generate a pseudo random number between 0-1 using the 
    Math.random() method and then multiple that value by 6 because we have
    a 6 sided dice.  However there is a chance that we get 0 either through
    a really low rounding or the random number is 0 so then we have to add 1
    because there is no 0 on a dice
    */
    rollValue = Math.floor(Math.random() * 6) + 1;
    
    // this then just returns that number being the dice rolled
    return rollValue;
}


function attackerButtonOnClick() {
    // this will first call the function that gets and returns the
    // value that the user selected from the drop down menu
    let dropDownValue = getElementAttackerDropDown();


    // declare variables for the if else statements
    let dice1, dice2, dice3;
    // now creates an if else block to check how many dice the user selected
    // it will then create an appropriate amount of dice based upon what
    // the user selected.  It will then roll the appropriate amount of dice.
    if (dropDownValue == 1) {
        dice1 = rollAttackerDice(); 
    } else if (dropDownValue == 2) {
        dice1 = rollAttackerDice();
        dice2 = rollAttackerDice();
    } else if (dropDownValue == 3) {
        dice1 = rollAttackerDice();
        dice2 = rollAttackerDice();
        dice3 = rollAttackerDice();
    }

    // This will first check if the value of the dice variable is null 
    if (dice2 == null && dice3 == null) {
        document.getElementById("dice1Result").innerHTML = dice1;
    } else if (dice3 == null) {
        document.getElementById("dice1Result").innerHTML = dice1;
        document.getElementById("dice2Result").innerHTML = dice2;
    } else {
        document.getElementById("dice1Result").innerHTML = dice1;
        document.getElementById("dice2Result").innerHTML = dice2;
        document.getElementById("dice3Result").innerHTML = dice3;
    }

}