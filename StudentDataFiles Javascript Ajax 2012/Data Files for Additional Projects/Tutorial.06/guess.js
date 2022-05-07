/*

*/
	var holdWords; //variable to hold the word
	var wordsLength; //the words length
	var correct = 0; //correct letters found
	var tries = 0; //number of tries
        var letters= new Array(); // will hold the letters of the game
        var letter = "";  // holds letter currently being validated
        var keybrd = new Array (0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
        window.onload = init;

/* this function initializes the guessing game */
function init(){
	var allElem = document.getElementsByTagName("*");
	
 	for (var i = 0; i < allElem.length; i++) {
		if (allElem[i].className == "letter") letters.push(allElem[i]);
        }

        /* add the callMe function as an onclick for all the letters
           array */

	holdWords = randomWords(); // generate a random word
	wordsLength = holdWords.length; 
 
	correct = 0; 
	tries = 0; 
        document.form1.trd.value = tries; //set textbox value to the tries
        document.onkeydown = catchKeyStrokes
        
}

/* this function attachs the event handler under both event models */
function addEvent(object, evName, fnName, cap) {
	if (object.attachEvent)
		object.attachEvent("on" + evName, fnName);
	else if (object.addEventListener)
		object.addEventListener(evName, fnName, cap);
}
/* This function returns a random word each time the game reloads */

function randomWords()
{
	w = new Array(17); //an array of 17 words
	w[0]="apple";
	w[1]="books";
	w[2]="clock";
	w[3]="block";
	w[4]="light";
	w[5]="crate";
	w[6]="sneak";
	w[7]="bleat";
	w[8]="brake";
	w[9]="truck";
	w[10]="racer";
	w[11]="eaten";
	w[12]="ruled";
	w[13]="green";
	w[14]="beans";
	w[15]="snare";
	w[16]="briar";


	var rand = Math.floor(Math.random() * 17); /* generates a random integer */
	var word = w[rand];	    /* here is the word */
	return word;				    /* return the word to the caller */

}


//the main function of the game - for mouse clicks
function callMe()
{
       /* check to see if letter is empty - if so, then mouse was clicked so
          assign letter the id of the source event */ 
       /* add one to tries and update the form1 text box */
       /* loop through the holdWords variable to see if letter matches
          any one of them. if so change the corresponding blank image to 
          document.images[letter].src, add one to correct, subtract
          one from tries (since there was a match, and update the form1 text 
          box 
          if correct is equal to the word length - tell the user they
           guessed the word */
        /* after looping through to see if there were matches, 
           check to see if tries is up -- if it is, tell the user */
        /* to stop user from trying same letter twice, remove the event 
           from the letter */
        /* also set keybrd location for letter to 1 so that they can't 
           press that key over either */
        /* reset letter to "" */


}

function removeEvent(object, evName, fnName, cap) {
	if (object.detachEvent) object.detachEvent("on" + evName, fnName);
	else if (object.removeEventListener)
		object.removeEventListener(evName, fnName, cap);

}
/*
**function that enables the user
**to play from the keyboard
*/
function catchKeyStrokes()
{
        
        /* if the keyCode is the return key, start a new game */
        /* else
             process the letter of the key pressed by 
             getting the character for it and then setting letter
             to that value. Then call callMe() */        


}


//function for playing a new game
function newGame()
{
	holdWords = randomWords(); // generate a random word
        // reset the wordsLength, correct, and tries variables
	wordsLength = holdWords.length; 
	correct = 0; 
	tries = 0; 
        letter="";

        // detach all events for the letters array elements
          
        // attach all events for the letters array elements

        // reset the blank images

        // reset the keybrd array
        for (var i = 0; i < keybrd.length; i ++ ) {
            keybrd[i] = 0;
        }	
 
        document.form1.trd.value = tries; //set textbox value to the tries


}