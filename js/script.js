/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing




/*** 
  I created an array of quotes object and added five quotes to it.
  Assigned each quote object a `quote` and `source` property, and one of the quotes with a `citation` and `year` property.
  ***/

var quotes = [
 
  { 
    quote: "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
    source: "Nelson mandela",
    citation: "www.goalcast.com/2017/05/02/top-nelson-mandela-quotes-inspire-you-to-believe",
    year: "2017"

  },
  {
     quote: "Life is about making an impact, not making an income.",
     source: "Kevin Kruse",

  },
  {
     quote: "I attribute my success to this: I never gave or took any excuse.",
     source:"Florence Nightingale",

  },
  {
     quote:"You miss 100% of the shots you don’t take.",
     source:"Wayne Gretzky",

  },
  { 
     quote:"The mind is everything. What you think you become.",
     source:"Buddha"
  }

];
   
 // console.log(quotes);
  


  
/***
  I created a `getRandomQuote` function and a variable that stores a random number, then used the random number to `return` a random quote object from the `quotes` array.
***/


function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes [randomNumber];
};

//console.log(getRandomQuote());

getRandomQuote();



/***
  Also here, i created a `printQuote` function,
  Called the `getRandomQuote` function and assigned it to a variable "result".

  Created a variable for a HTML string "message" and set it equal to an empty string.
  
  I concatenated into the empty string variable 'message', an HTML string, adding the quote and source section from the quotes array object with a
    provided HTML template in the instructions, and the random quote vairable.

  To test if the quote object has a year and citation property before adding it to the HTML string, a conditional statement 'if' is required.

   After the if statement test, i Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
 
function printQuote() {

  var result = getRandomQuote();
  var message = "";
  
  message += "<p class='quote'>" + result.quote + "</p>";
  message += "<p class='source'>" + result.source;

  if (result.citation){
   message += "<span class='citation'>" + result.citation + "</span>"
  };

  if (result.year) {
   message += "<span class='year'>"  + result.year + "</span>" 
  }


  message += "</p>";
  document.getElementById('quote-box').innerHTML = message




/*** Random background color    (Extra credit)***/ 

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  console.log(bgColor);

  document.body.style.background = bgColor;
  }

  random_bg_color();
}

printQuote();




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//Remember to delete the comments that came with this file, and replace them with your own code comments.