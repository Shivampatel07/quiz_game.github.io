var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
// var prevScore = true;
// var newScore = true;
document.getElementById('startset').onclick = function () {
    if (playing == true) {
        location.reload();
    }
    else {

        playing = true;
        score = 0;
        document.getElementById('scorevalue').innerHTML = score;
        show('timeremaining')
        timeremaining = 60;
        document.getElementById('times').innerHTML = timeremaining;
        hide('gameover');
        // hide('table_score')
        document.getElementById("startset").innerHTML = "Reset Game";
        startCountdown();
        generateQA();

    }

}

for (let i = 1; i < 5; i++) {
    document.getElementById("box" + i).onclick = function () {
        if (playing == true) {
            if (this.innerHTML == correctAnswer) {
                score += 4;
                document.getElementById("scorevalue").innerHTML = score;
                hide("wrong");
                show("correct");
                setTimeout(function () {
                    hide("correct");
                }, 1000);
                generateQA();
            } else {
                hide("correct");
                show("wrong");
                score -= 1
                document.getElementById("scorevalue").innerHTML = score;
                setTimeout(function () {
                    hide("wrong");
                }, 1000);
            }
        }
    }
}
// var table = document.getElementById('table_score');
// document.getElementById('scoreboard').onclick = function () {
//     if (table.style.display == 'block') {
//         hide("table_score")
//     }
//     else {
//         show("table_score")
//         if (prevScore == true && newScore==true) {
//             document.getElementById('table_score').innerHTML = "<p> Your Previous Score : " + prevScore + "</p>" + "<p> Your New Score : " + newScore + "</p>"
//         }
//         else if (prevScore == true && newScore == false) {
//             document.getElementById('table_score').innerHTML = "<p> Your Previous Score : " + prevScore + "</p>" 
//         }
//         else if (prevScore == false && newScore == true) {
//             document.getElementById('table_score').innerHTML =  "<p> Your New Score : " + newScore + "</p>"
//         }
//         else{
//             document.getElementById('table_score').innerHTML = "<p> Your New and Previous Score is not available "+"</p>"
//         }
//     }
// }


function startCountdown() {
    action = setInterval(function () {
        timeremaining -= 1;
        document.getElementById("times").innerHTML = timeremaining;
        if (timeremaining == 0) {
            stopCountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startset").innerHTML = "Start Game";
        }
    }, 1000);
}
function stopCountdown() {
    clearInterval(action);
}
function show(ID) {
    document.getElementById(ID).style.display = 'block'
}
function hide(ID) {
    document.getElementById(ID).style.display = 'none'
}

function generateQA() {
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    correctAnswer = x * y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1 + Math.round(3 * Math.random());
    document.getElementById("box" + correctPosition).innerHTML = correctAnswer;

    var answers = [correctAnswer];

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random())); //a wrong answer
            } while (answers.indexOf(wrongAnswer) > -1)
            document.getElementById("box" + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}