$(document).ready(function()
{
    $(".box").on("click",function(){
        var name = this.id;
        function logit(data)
        {   if(name =="articles")
        {
            location.href = 'src/articles/';
        }
        else if(name=='quote')
        {
            location.href = 'src/quotes/';
        }
            console.log("item clicked is "+ data);
        }
        logit(name);
      
    });
});