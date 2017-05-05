var quotes =["Be yourself; everyone else is already taken. ",
             "So many books, so little time.",
             "You only live once, but if you do it right, once is enough",
             "Live as if you were to die tomorrow. Learn as if you were to live forever",
             "To live is the rarest thing in the world. Most people exist, that is all",
             "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment",
             "It is never too late to be what you might have been",
             "Everything you can imagine is real",
             "Sometimes the questions are complicated and the answers are simple",
             "We read to know we're not alone",
             "We don't see things as they are, we see them as we are"];
var author = ["Oscar Wilde"
              ,"Frank Zappa"
              ,"Mae West"
              ,"Mahatma Gandhi"
              ," Oscar Wilde",
              "Ralph Waldo Emerson",
              "Unknown",
              "Pablo Picasso",
              " Dr. Seuss",
              " William Nicholson",
              "Anaïs Nin"];
              var random = 0;

document.getElementById('quote').innerHTML = quotes[1];
document.getElementById('author').innerHTML = author[1];

var col ="red";
function next(){
   random = Math.floor(Math.random() * quotes.length);
document.getElementById('quote').innerHTML = quotes[random];
document.getElementById('author').innerHTML = author[random];

}
function twit()
{
  
}

