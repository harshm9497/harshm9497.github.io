$(document).ready(function()
{
  var quotes= $.getJSON("quotelist.json", function(data)
    {
          console.log(data.length);
       appendQuote(data);

        $(".box").on("click",function(){
                showQuotes(this);
        });
    });
 });
