$(document).ready(function(){
 
    var count = 0;
    var quotes= $.getJSON("quotes.json", function(data)
    {
        var total= data.length;
        console.log(total);
         
var throwQuote = function(){
    $("#quotes").append("<h1 class='heading'>PAGE"+ (count/20+1) +"</h1>");
            for(var num = count; num<count+30;num++)
    {
        
        $("#quotes").append("<div class='col-sm-6 box' data-index='"+num +"'><h1>" + data[num].text+"</h1>"+
        "<h2>"+data[num].author+"</h2></div>");
           
    }
        };
        throwQuote();
        count = 20;
    $(".generate ").on('click',function()
    {
        $("#quotes").empty();
         throwQuote();
        count+=20;
        $('html, body').animate({ scrollTop: 0 }, 0);
    });
});  
$("body").fadeIn(2000);
});
