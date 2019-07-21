$(document).ready(function(){
    var startTime=6;
    var correctCount=0;
    var wrongCount=0;
    
    
    
    //Setting Timer to 30 seconds   
    function timer(){
        startTime--;
        $("#Timer").html("Time Remaining: " + startTime + " Seconds")
        if (startTime<1)
        {
            clearInterval(timerCountdwn);
        }    
    }
        var timerCountdwn = setInterval(timer,1000)  

       //ARRAY OF QUESTIONS/CHOICES/ANSWERS
        let triviaQuest = [
           { Question: "Where Can You Watch 'Stranger Things'?", 
            Choice: ["Amazon Prime", "Netflix", "Hulu", "YouTube",],
            answer: "Netflix"
           },
                { Question: "Who does Millie Bobby Brown play as?", 
                    Choice: ["Joyce", "Nancy", "Eleven", "Max",],
                    answer: "Eleven"
                }, 
                    { Question: "What game does Mike, Dustin, Lucas, and Will play?", 
                        Choice: ["Atari", "Dungeon&Dragons", "Donkey Kong", "Pac-Man",],
                        answer: "Dungeon&Dragons"
        },
        ]
        console.log(triviaQuest[2])

//HAVE 'VAR INDEX' AS A RANDOM NUMBER
//SO THE QUESTIONS WILL BE RANDOMIZED WHEN DISPLAYED ON THE SCREEN
function Questions(){
    var index = Math.floor(Math.random()*triviaQuest.length)
    console.log("index " + index)

//'VAR questARRY' WILL TAKE IN THE OBJECTS IN THE ARRAY
    var questArray = triviaQuest[index];
    console.log(questArray)
    
// DISPLAY THE RANDOMIZED QUESTION ON SCREEN
    $("#questions").html("<h2>" + questArray.Question + "</h2>")
// FOR LOOP TO SHOW THE DIFFERENT OPTIONS USER CAN PICK FROM
    for(let i=0; i<questArray.Choice.length; i++)
    {
        var choices = $("<div>");
        choices.attr('class', "userChoice");
        choices.html(questArray.Choice[i])
        choices.attr("data-pick", i);
        $("#choices").append(choices);
        console.log("choices " + i )
         console.log(questArray.Choice[i])
        
    }

}

//ONCLICK FUNCTION WHERE USER CAN CLICK ON THE ANSWER
$(".userChoice").on("click", function(){
    console.log("INSIDE CLICK")
    var guess= "";
    guess +=  parseInt($(this).attr("data-pick"));

    // IF STATEMENT TO DETERMINE IF THE ANSWER IS RIGHT OR WRONG
    if( guess === questArray.answer) 
    {
        correctCount++;
        $("#choices").html("<p>Correct</p>")
    }
    else
    {
        $("#choices").html("Wrong")
    }
    console.log(correctCount)
    

});
Questions();



   
      
       



        




    
    
    
});