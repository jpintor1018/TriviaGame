$(document).ready(function(){
    var startTime=30;
    var correctCount=0;
    var wrongCount=0;
    var unanswered=0;
    var questArray;
    var timerCountdwn;
    
    
    
    
    //Setting Timer to 30 seconds   
    function timer(){
        timerCountdwn = setInterval(CountDown,1000)  
        

    }
    function CountDown(){
        $("#Timer").html("Time Remaining: " + startTime + " seconds")
        startTime--;

        if(startTime === -1)
        {
            stopTime();
            unanswered++;
            $("#choices").html("Time's Up!!")
            console.log("Unanswered: " + unanswered)
        }
    }

        //STOP TIME
    function stopTime(){
        timerStop=false;
        clearInterval(timerCountdwn)
    }
      //-------------------------------------------------

       

       //ARRAY OF QUESTIONS/CHOICES/ANSWERS
        let triviaQuest = [
            {Question: "What year does season one take place?", 
             Choice: ["1987", "1990", "1983", "1985"],
             answer: "2"
            },
            {Question: "Who was the character from 'Ghostbusters' that Mike and Lucas both ended up dressing as?", 
             Choice: ["Winston", "Egon", "Venkman", "Stance"],
             answer: "2"
            }, 
            {Question: "What is the name of the game that Mike, Dustin, Lucas, and Will play?", 
             Choice: ["Atari", "Dungeon&Dragons", "Dragon's Lair", "Magic: The Gathering"],
             answer: "1"
            },
            {Question: "What is the name of the unusual disorder Dustin has?", 
             Choice: ["Epidermolysis", "Cleidocranial Dysplasia", "Hydrocephalus", "Lamellar Ichthyosis"],
             answer: "1"
            },
            {Question: "What do Mike, Lucas, Dustin call the terrifying, faceless creature?", 
             Choice: ["Wookie", "Godzilla", "The Thing", "Demogorgon"],
             answer: "3"
            },
            {Question: "How does Joyce communicate with her son Will when he disappeared?", 
             Choice: ["Painting on the walls", "Through a mirror", "Christmas Lights", "Walkie Talkie"],
             answer: "2"
            },
            {Question: "The parallel dimension inhabited by the Demogorgon is referred to as ____?", 
             Choice: ["The Butterfly Effect", "The Dark World", "The Upside Down", "The Death Star"],
             answer: "2"
            },
            {Question: "What does Jonathan give Will as he recovers in the hospital?", 
             Choice: ["Nintendo", "A Movie", "A Poster", "A Mixtape"],
             answer: "3"
            },
            {Question: "What is the name of the ice cream shop Steve and Robin work in the mall?", 
             Choice: ["Chips Ahoy", "Ahoy Ahoy", "Scoops Ahoy", "Ice Cream CONEection"],
             answer: "2"
            },
            {Question: "What is the name of the song that Suzie asks Dustin to sing?", 
             Choice: ["Total Eclipse of the Heart", "Every Breath You Take", "Girls Just Want To Have Fun", "The Neverending Story"],
             answer: "3"
            },
        ]
   //------------------------------------------------------------------------------------------------------------------------------------------

        //HIDE "PLAY AGAIN?" BUTTON
        $("#playAgain").hide();
        $("#Timer").hide();
        

        //WHEN START BUTTON IS CLICK PAGE LOADS
        $("#begin").on("click", function(){
            $("#begin").hide();
            Questions();
            $("#Timer").show();
            timer();
           


        })
        
//HAVE 'VAR INDEX' AS A RANDOM NUMBER
//SO THE QUESTIONS WILL BE RANDOMIZED WHEN DISPLAYED ON THE SCREEN
function Questions(){
    var index = Math.floor(Math.random()*triviaQuest.length)
    console.log("index " + index)


//'VAR questARRY' WILL TAKE IN THE OBJECTS IN THE ARRAY
    questArray = triviaQuest[index];
    console.log(questArray)
    
// DISPLAY THE RANDOMIZED QUESTION ON SCREEN
    
    $("#questions").html("<h2>" + questArray.Question + "</h2>")
// FOR LOOP TO SHOW THE DIFFERENT OPTIONS USER CAN PICK FROM
    for(let i=0; i<questArray.Choice.length; i++)
    {
        var choices = $("<button>");
        choices.attr('class', "userChoice");
        choices.html(questArray.Choice[i])
        choices.attr("data-pick", i);
        $("#choices").append(choices);
        console.log("choices " + i )
        console.log(questArray.Choice[i])
        
    }

}


    //ONCLICK FUNCTION WHERE USER CAN CLICK ON THE ANSWER
    $(document).on("click", '.userChoice', function(){

    console.log("INSIDE CLICK")
     var guess= "";
     guess +=  parseInt($(this).attr("data-pick"));
     
     console.log("-----------------")
    console.log(guess)
    console.log(questArray.answer)
  
    console.log("-----------------")

    // // IF STATEMENT TO DETERMINE IF THE ANSWER IS RIGHT OR WRONG
     if ( guess === questArray.answer) {
        correctCount++;
        $("#choices").html("<p>Correct!</p>")
        console.log(guess)
        guess="";
        Questions();
        stopTime();

        console.log("----------------")
        console.log("correct: " + correctCount)
        console.log("wrong: " +  wrongCount)
       

    }
    else 
    {
        wrongCount++;
        $("#choices").html("Wrong!")
        guess="";
        Questions();
        stopTime();

        console.log("----------------")
        console.log("correct: " + correctCount)
        console.log("wrong: " +  wrongCount)
      
    }

    console.log(unanswered)


    

});




   
      
       



        




    
    
    
});