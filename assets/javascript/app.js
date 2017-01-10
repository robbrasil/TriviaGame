var right = 0;
var wrong = 0;
var none = 0;

function gameStart() {
    //console.log("button pressed");
    document.getElementById("button").style.display = "none";
    document.getElementById("content").style.display = "block";
    //Set seconds
    var timer = setInterval(myTimer, 1000);
    //Set time to countdown in secs
    var count = 60;
    //Timer function
    function myTimer() {
        document.getElementById("timer").innerHTML = count;
        count = count - 1;
        //console.log("count");
        if (count <= 0) {
            clearInterval(timer);
            gameDone();

            return;
        }
    };
};
//Fires when the Done button is pressed or the time runs out
function gameDone() {
    document.getElementById("content").style.display = "none";
    document.getElementById("endGameContent").style.display = "block";

    var radios = document.getElementsByTagName('input');
    var value;

    //Checks if all questions were answered
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            value = radios[i].value;
            none = 0;
        }
    };
    //Checks for right answers and increments the variable
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked && radios[i].className === "true") {

            right++;
            none = none - 3;
            //Checks for wrong answers and increments the variable
        } else if (radios[i].type === 'radio' && radios[i].checked && radios[i].className === "false") {
            wrong++;
            none = none - 3;
            //Checks for unanswered questions and increments the variable
        } else if (radios[i].type === 'radio' && radios[i].checked === false) {
            none++;
        }

    };
    //Renders the values at the DOM
    document.getElementById("correctAnswers").innerHTML = right;
    document.getElementById("incorrectAnswers").innerHTML = wrong;
    document.getElementById("unanswered").innerHTML = none / 4;


}