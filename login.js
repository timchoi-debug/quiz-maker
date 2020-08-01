

class Login {
    #username;
    #password;

    login() {
        username = "";
        password = "";
    }
    
    get_username() { return this.#username; }
    get_password() { return this.#password; }

    set_username(new_user) { username = new_user; }
    set_password(new_password) { password = new_pass; }

    valid_username(selected) {
        if (selected == "") {
            return false;
        }
        else if (selected.length >= 12) {
            return true;
        }
        return false;
    }
    valid_password(selected) {
        if (selected == "") {
            return false;
        }
        else if (selected.length >= 12) {
            for (i = 0; i < selected.length; ++i) {
                if (selected[i] = selected[i].toUpperCase()) {
                    return true;
                }
            }
            return false;
        }
        return false;
    }
};



