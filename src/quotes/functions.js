
function appendQuote(data)
{
     for(var quoteCategory in data)
        {
          
          var item = '<div class="box col-md-3 categories " data-cat="'+data[quoteCategory].category+'"><h3>'+data[quoteCategory].category+'</h3></div>';
          $(".injectQuote").append(item);
        }
}
  function showQuotes()
  {
    
  this.myData = null;
  this.generate = function(object)
     {   
  this.typeQuotes  = $(object).data("cat")+".json";
    console.log(this.typeQuotes);
    var data1;
    $.ajax({
        url: this.typeQuotes,
        async: false,
        dataType: 'json',
        success: function(data){
            data1= data;
        }
    });
       this.myData = data1;
     };
  this.inject = function(number){
    $(".injectQuote").empty();
         var abc = this.myData.length;
           $("#myLength").attr("data-myLength",abc);
               
       for(i = number-20;i<number;i++)
       {
        
         var item = '<div class="box col-md-3" ><h4 >'+this.myData[i].text+'</h4><p>'+this.myData[i].author+'</p></div>';
         $(".injectQuote").append(item);
       }
    };
  }


function GeneratePagination()
{
  console.log($("#myLength").data("mylength"));
  var totalQuotes = $("#myLength").data("mylength");

  
  var page = "<ul class='page-container'>";
  for(var i = 1; i<((totalQuotes)/15)-2;i++)
  {
    page += "<li class='page-item'>"+i+"</li>";
  }
  page+="</ul>";
 // console.log(page);
  $("#pagination").append(page);
}
