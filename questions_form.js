document.write(<script type="text/javascript" src="questions.js"></script>);
document.write(<script type="text/javascript" src="questions_database.js"></script>);
var mysql = require('mysql');
const { title } = require('process');
const Connection = require('mysql/lib/Connection');


var db;
var score;

function open() {
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function(err, result) {
            if (err) throw err;
            return result;
        });
    });
}

function displayQuestion() {
    db = this.open();
    document.write('<h1>' + db[index].question + '</h1>');
    document.writeln('<input type="text" name="answer" required>')
    checkAnswer(document.getElementsByName('answer').innerHTML);
}

function checkAnswer(response) {
    if (response == db[index].answer) {
        document.writeln('<h4>' + "Correct!" +'</h4>');
        score++;
    }
    else {
        document.writeln('<h4>' + "Wrong!" + '</h4>');
    }
    nextQuestion();
    displayQuestion();
 }

function nextQuestion() {
    if (this.index >= this.num_of_questions) {
        document.writeln('<h1>' + "End of Quiz!" + '</h1>');
        document.writeln('<h1>' + "Score: " + score + "/" + this.num_of_questions + '</h1>'); 
        window.open("question_handling.html");
    }
    this.index++;
}

