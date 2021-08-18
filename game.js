var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

var started = false;
var level = 0;
$(document).keydown(function(event){
    if(event.which === 32 || event.which === 13){
        if(!started){
            $("#level-title").text("Level " + level);
            nextSequence();
            started = true;
        }
    }

});
$("#start").click (function(){
    // if(event.which === 13){
        if(!started){
            $("#level-title").text("Level " + level);
            nextSequence();
            started = true;
        }
    // }

});




// if(keyBoard){
//     nextSequence();
// }
$(".btn").on("click", function(){

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    
    playSound(userChosenColor);

    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
  
        if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){

            
            if(gamePattern.length===userClickedPattern.length){
                setTimeout(function(){
                    nextSequence();},
                    1000
                );
            }
        }
        else {
            startOver();
        } 
    
}

function startOver(){
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over"), 200
    });
    $("#level-title").text("Game Over, Press Space To Restart");
    started = false;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    // console.log(randomNumber);
    var randomChosenColor = buttonColors[randomNumber];
    // console.log(randomChosenColor);
    gamePattern.push(randomChosenColor);

    if(randomChosenColor=="green"){
        $("#green").fadeOut(100).fadeIn(100);
        playSound(randomChosenColor);
    }
    else if(randomChosenColor=="blue"){
        $("#blue").fadeOut(100).fadeIn(100);
        playSound(randomChosenColor);
    }
    else if(randomChosenColor=="yellow"){
        $("#yellow").fadeOut(100).fadeIn(100);
        playSound(randomChosenColor);
    }
    else if(randomChosenColor=="red"){
        $("#red").fadeOut(100).fadeIn(100);
        playSound(randomChosenColor);
    }
 
}

// function colorFade(color){
//     $("#"+ color).fadeOut(100).fadeIn(100);
// }

function playSound(buttonSound){
    var audio = new Audio("sounds/" + buttonSound + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed")
    }, 100);
}


