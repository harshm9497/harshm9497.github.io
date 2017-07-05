$(document).ready(function()
{
  var quotes= $.getJSON("quoteList.json", function(data)
    {
          console.log(data.length);
       appendQuote(data);

        $(".box").on("click",function(){
                showQuotes(this);
        });
    });
 });
