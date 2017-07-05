function appendQuote(data)
{
     for(var quoteCategory in data)
        {
          
          var item = '<div class="box col-md-3 " data-cat="'+data[quoteCategory].category+'"><h3>'+data[quoteCategory].category+'</h3></div>';
          $(".injectQuote").append(item);
        }
}
function showQuotes(object)
{
    var typeQuotes  = $(object).data("cat")+".json";
    console.log(typeQuotes);
    $(".injectQuote").empty();
     $.getJSON(typeQuotes,function(data)
     {
       data.forEach(function(element)
       {
         var item = '<div class="box col-md-3" ><h4>'+element.text+'</h4><p>'+element.author+'</p></div>';
         $(".injectQuote").append(item);

       });
      

       
     });
}
