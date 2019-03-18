// GAME LOGIC

$( document ).ready(function(){

    // The random number shown at the start of the game should be between 19 - 120.
    var computersPick = Math.floor(Math.random() * 100 + 20 ) ; 
    console.log(computersPick);
    $("#computersPick").text("Number to Guess: " + computersPick); 

    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12
    // 
    var crystalOne = Math.floor(Math.random() * 11 + 1); 
    var crystalTwo = Math.floor(Math.random() * 11 + 1);  
    var crystalThree = Math.floor(Math.random() * 11 + 1);  
    var crystalFour = Math.floor(Math.random() * 11 + 1);  
    
    //Declaring varaibles to hold the FinalScore, wins & losses of the payer. 
    var playerFinalScore = 0; 
    var wins = 0;
    var losses = 0;

    var imgFile = $("#winImg"); 
     
    // FUNCTIONS 
    // -----------------------------------------------------------------------

    //Reset Game() 
    function resetGame(){

        computersPick = Math.floor(Math.random() * 100 + 20 ) ; 
        $("#computersPick").text("Number to Guess: " + computersPick); 

        crystalOne = Math.floor(Math.random() * 11 + 1); 
        crystalTwo = Math.floor(Math.random() * 11 + 1);  
        crystalThree = Math.floor(Math.random() * 11 + 1);  
        crystalFour = Math.floor(Math.random() * 11 + 1);  

        //Final Score 
        playerFinalScore = 0; 
        $("#finalScore").text(playerFinalScore); 
    }   
   
    // Win or Loss the game increases the counter 
    function winLoss(){

        if( computersPick === playerFinalScore){

            wins++; 
            $("#wins-text").text("Wins: " + wins); 
            alert("Woo hoo!! you nailed it!!");
            imgFile.attr("src", "assets/images/winner-1.svg"); //Add image when the user wins 
            //Reset Game 
            resetGame();
        }
        else if( playerFinalScore >  computersPick ){
            
            losses++; 
            $("#loss-text").text("Loss: " + losses); 
            alert("YOU LOSE..BETTER LUCK NEXT TIME!"); 
            imgFile.attr("src", "assets/images/lost-game.svg"); //Add image when the user losses  
            //Reset Game 
            resetGame();
        }
    }
    //Trying create a common function for all the four buttons using its class 

    //Create an "on-click" event attached to the ".btn-choice" class.
    //_ - _ - - -------------------------------------------------------------

    $(".btn-choice").on("click", function() {
        console.log($(this).val()); 

        //In case if Crystal ONe is clicked 
        if ( $(this).val() === 1) {

            playerFinalScore += crystalOne; 
            console.log("crystalOne: " + crystalOne);
            console.log("Updated Score: " + playerFinalScore);
            $("#finalScore").text(playerFinalScore); 
            //Set Win or loss 
            winLoss(); 
        }
        //In case if Crystal Two button is clicked
        else if ( $(this).val() === 2) {

            playerFinalScore += crystalTwo; 
            console.log("crystalTwo: " + crystalTwo);
            console.log("Updated Score: " + playerFinalScore);
            $("#finalScore").text(playerFinalScore); 
            //Set Win or loss 
            winLoss(); 

        }
        else if ( $(this).val() === 3) {

            playerFinalScore += crystalThree; 
            console.log("crystalThree: " + crystalThree);
            console.log("Updated Score: " + playerFinalScore);
            $("#finalScore").text(playerFinalScore); 
            //Set Win or loss 
            winLoss(); 
        }
        //Crystal four 
        else {

            playerFinalScore += crystalFour; 
            console.log("crystalFour: " + crystalFour);
            console.log("Updated Score: " + playerFinalScore);
            $("#finalScore").text(playerFinalScore); 
            //Set Win or loss 
            winLoss(); 

        }
    })  


}); 