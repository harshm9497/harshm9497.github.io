$(document).ready(function()
{
    $(".box").on("click",function(){
        var name = this.id;
        function logit(data)
        {   if(name =="articles")
        {
            location.href = 'src/articles/index.html';
        }
        else if(name=='quote')
        {
            location.href = 'src/quotes/quotes.html';
        }
            console.log("item clicked is "+ data);
        }
        logit(name);
      
    });
});