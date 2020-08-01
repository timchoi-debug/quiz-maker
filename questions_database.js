document.write('<script type="text/javascript" src="questions.js"></script>');
var mysql = require('mysql');
const { title } = require('process');
const Connection = require('mysql/lib/Connection');



class Question_Database {
    #num_of_questions;
    #title_of_database;
    #query
    #questions
    index
    created

    constructor(name) {
        this.#title_of_database = name;
        this.#num_of_questions = 0;
        var con = mysql.createConnection({
            host: "localhost",
            username: "timchoi",
            password: "nBdaadfwefw"
        });
        query = con.connect(function(err) {
            if (err) { 
                throw err;
            }
            con.query("CREATE DATABASE " + name, function(err, result) {
                if (err) {
                    throw err;
                }
            });
        });
    }

    generate_id() {
        this.generate_id();
    }

    set_title(new_title) { title_of_database = new_title; }

    create_table() {
        con.connect(function(err) {
            if (err) throw err;
            var sql = "CREATE TABLE users (user_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(300), password VARCHAR(400), points INT, rank INT)";
            con.query(sql, function (err, result) {
                if (err)  throw err;
                console.log("Table created!");
            });
        });
    }

    insert_question(question, answer) {
        con.connect(function(err) {
            if (err) throw err;
            var sql = "INSERT INTO " + title_of_database + " (question_id, question, answer, likes) VALUES (" + generate_id() + ", " + question + ", " + answer + ", " + 0 + ")";
            con.query(sql, function(err, result) {
                if (err) throw err;
            });
        });
    }

    delete_question(id) {
        con.connect(function(err) {
            if (err) throw err;
            var sql = "DELETE FROM " + title_of_database + " WHERE question_id = " + id;
            con.query(sql, function(err, result) {
                if (err) throw err;
            });
        });
    }

    get_question(id) {
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT question_id, question FROM " + title_of_database, function(err, result, fields) {
                if (err) throw err;
                for (i = 0; i < result.length; ++i) {
                    if (result[i].id == id) {
                        return result[i].question;
                    }
                }
            });
        });
    }

    sort_question() {
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT * FROM " + title_of_database + " ORDER BY question_id", function(err, result) {
                if (err) throw err;
            });
        });
    }

     open_database() {
        con.connect(function(err) {
            if (err) throw err;
            con.query(sql, function(err, result) {
                if (err) throw err;
                return result;
            });
        });
    }
};















