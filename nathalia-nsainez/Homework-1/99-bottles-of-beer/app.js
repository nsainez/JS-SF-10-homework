/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/




function bootlesOfBeer (){

  for (let i = 99; i >= 3; i--) {
    current = i-1;
    console.log(i + " Bottles of Beer on the Wall, "+ i + " Bottles of Beer." 
   + "\n" + "Take one down pass it around, " + current+  " Bottles of Beer on the ground.");
   } if (i = 2) {
      current= i-1;
      console.log(i + " Bottles of Beer on the Wall, "+ i + " Bottles of Beer." 
        + "\n" + "Take one down pass it around, " + current +  " Bottle of Beer on the ground.");
    } if (i = 1) {
       console.log(current + " Bottle of Beer on the Wall, "+ current + " Bottle of Beer." 
         + "\n" + "Take one down pass it around, " + "0" +  " Bottles of Beer on the ground.");
   
    } 
      console.log("No more bottles of beer on the wall, no more bottles of beer." +
              " \n"+ "Go to the store and buy some more, 99 bottles of beer on the wall");
   }
    
  bootlesOfBeer(); 
