$(document).ready(function(){
    
    var quotes= $.getJSON("quoteList.json", function(data)
    {
for(var num in data)
    {
        $("#quotes").append("<div class='box'><h1>" + data[num].quote  + "</h1><h2>"+data[num].author +"</h2></div>");
    }
    });
    
    $("body").fadeIn(2000);
    
});