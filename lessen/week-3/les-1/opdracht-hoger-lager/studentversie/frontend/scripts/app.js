import {HogerLagerFeature} from "./hogerlager-feature.js";

class App {

    constructor() {
        console.log('App instantie');   //shift + f5 browser refresh
    }

    run(){
        const hlf = new HogerLagerFeature();
        hlf.init();
    }

}

const app = new App();

app.run();
