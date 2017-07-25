$(document).ready(function()
{
 
  var quotes= $.getJSON("quoteList.json", function(data)
  {
   console.log(data.length);
   appendQuote(data);
   var myQuotes = new showQuotes();
    $(".categories").on("click",function(){      
          myQuotes.generate(this);
          myQuotes.inject(20);
         GeneratePagination();
    
   $('.page-item').on('click',function()
         {
           console.log("page-item clicked");
      
           var number =Number( $(this).html());
           myQuotes.inject(number*20);
      });
    });
  });
});

