var outcomes = ["choices","Rock", "Scissors", "Paper"];
function game(input)
{
    var random = Math.floor(Math.random() * 3) + 1  ;
    if(input == random)
    {
        return "Game ended in DRAW";
    }
    else if(input ==1 && random ==2)
    {
        return " Yeah! you win " + "your choice " + outcomes[input] +" computers choice " + outcomes[random];
    }
    else if( input == 2 && random == 3)
    {
        return " Yeah! you win "+ "your choice " + outcomes[input] +"                       computers choice " + outcomes[random];
    }
    
    else if(input ==3 && random ==1)
    {
        return " Yeah! you win "+ "your choice " + outcomes[input] +"                computers choice " + outcomes[random];
    }
    
    else
    {
        return "YOU lost! try once again  "+ "your choice " +                      outcomes[input] +" computers choice " + outcomes[random];
    }
        
    
}
alert("enter the coressponding number to make a choice. 1.Rock  2.Scissors 3.Paper");
var choice = prompt("enter your choice");
game(choice);