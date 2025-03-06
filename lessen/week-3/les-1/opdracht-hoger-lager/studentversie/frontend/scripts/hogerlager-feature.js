import {Model} from "./model.js";

const model = new Model();

class HogerLagerFeature{
    init(){
        console.log('HogerLagerFeature init');

        //#student-start
        this.eventListeners();
        //#student-end

    }

    eventListeners(){
        document.getElementById('btnSubmit')
            .addEventListener('click', this.submitGuess);
    }

    async submitGuess(event){

        //#student-start
        event.preventDefault();
        let guess = document.getElementById('guess').value;
        const answer = await model.getAnswer(guess);
        document.getElementById('answer').innerHTML = answer;

        //#student-end

    }
}

export {HogerLagerFeature};
