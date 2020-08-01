

class Question {
    #question;
    #votes = 0;
    #ID
    #answer;
    constructor(q,a) {
        question = q;
        answer = a;
        this.#ID = this.generate_ID();
    }


    get_question() {
        return question;
    }

    get_answer() {
        return answer;
    }

    get_ID() {
        return this.#ID;
    }

    generate_ID() {
        return Math.random() * 10000;
    }

    get_votes() {
        return this.#votes;
    }

    change_question(new_question) {
        if (new_question != "") {
            question = new_question;
            return true;
        }
        return false;
    }

    change_answer(new_answer) {
        if (new_question != "") {
            answer = new_answer;
            return true;
        }
        return false;
    }
};
