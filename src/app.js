$(document).ready(function()
{
    $(".box").on("click",function(){
        var name = this.id;
        function logit(data)
        {
            console.log("item clicked is "+ data);
        }
        logit(name);
        function callit()
        {
            $("#result").load('src/articles/index.html');
        }
        callit();

    });
});