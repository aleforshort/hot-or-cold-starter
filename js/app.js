
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
    });

  	function newGame() {
  		// var userInput = $("#userGuess").val()
      var randomNumber = getRandom (1, 100);
      $("#guessList").append("<li>"+randomNumber+"</li");
    }

  	function startGame() { 
      var userInput = $("#userGuess") .val();
       if (userInput == randomNumber){
        $("#feedback").append("<h2>You win</h2>");
        }
        else if (userInput == randomNumber - 20 && userInput == randomNumber + 20) {
          $("#feedback").append("<h2>Hot</h2>");
        }

        else{
          $("#feedback").append("<h2>Cold</h2>")
        }

    }
      function getRandom(min, max) {
       return Math.floor(Math.random() * (max - min)) + min;
          
      }

      $(".guessBox").on("click", function(){
        
        

  	     });
    $(".new").on("click", newGame);

              


});
