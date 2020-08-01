

document.write('<script type="text/javascript" src="login.js"></script>');
let num_of_users = 0;

class User {
    #account;
    #points = 0;
    #rank = 0;
    #logged;
    #firstTime;
    score;

   constructor(this_account) {
        this_account = this.#account();
    }
    get_username() {
        return this.#account.get_username();
    }
    get_password() {
        return this.#account.get_password();
    }
    set_username(name) {
        account.set_username(name);
    }
    set_password(pass) {
        account.set_password(pass);
    }
    get_points() {
        return this.#points;
    }
    get_rank() {
        return this.#rank;
    }
    reset_points() {
        points = 0;
    }
    reset_rank() {
        rank = 0
    }
    set_first_time(member) {
        this.#firstTime = member;
    }
    get_first_time() {
        return this.#firstTime;
    }
    change_user(new_user) {
        if (new_user != "") {
            account.obtain_username(new_user);
            return true;
        }
        return false;
    }

    change_password(new_password) {
        if (new_user != "") {
            account.obtain_username(new_user);
            return true;
        }
        return false;
    }

    delete_account(acct) {
        acct.delete_login();
        points = 0;
        rank = 0;
        return true;
    }

    logout() {
         this.#logged = false;
    }
    set_logged(now) {
        logged = now;
    }
};





var mysql = require('mysql');
const Connection = require('mysql/lib/Connection');


function openDatabase() {
    var con = mysql.createConnection ({
        host: "localhost",
        user: "timchoi",
        password: "223233"
    });
}
function createDatabase() {
    con.connect(function(err) {
        if (err) {
            throw err;
        }
        console.log("Connected!");
        con.query("CREATE DATABASE users", function(err, result) {
            if (err) {
                throw err;
            }
            console.log("Database Created");
        });
    });
}

function createTable() {
    con.connect(function(err) {
        if (err) throw err
        console.log("Connected!");
        var sql = "CREATE TABLE users (user_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(300), password VARCHAR(400), points INT, rank INT)";
        con.query(sql, function (err, result) {
            if (err)  throw err;
            console.log("Table created!");
        });
    });
}

function addElement(their_user, their_pass, their_points, their_rank) {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO users (username, password, points, rank) VALUES ('" + their_name + "', '" + their_user + "', '" + their_pass + "', '" + their_points + "', '" + their_rank + "')";
        con.query(sql, function(err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
}


openDatabase();
if (num_of_users == 0) {
    createDatabase();
}
let newUser = new User(account);
newUser.addElement(newUser.get_username(), newUser.get_password(), newUser.get_points(), newUser.get_rank());
num_of_users++;
Connection.end();









