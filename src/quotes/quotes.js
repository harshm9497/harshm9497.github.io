$(document).ready(function(){
    
    var quotes=[{line:"yes quotes",author:"this"},{line:"second quote",author:"that"}];
    for(var quote in quotes)
    {
        $("#quotes").append("<div class='box'><h1>" + quotes[quote].line  + "</h1>" +"<h2>" + quotes[quote].author +"</h1></div>");
    }
    
    
});