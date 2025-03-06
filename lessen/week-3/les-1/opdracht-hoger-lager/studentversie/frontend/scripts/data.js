class Data {

    async getAnswer(gok) {

        let r = await fetch(`http://localhost:3000/getal?gok=${gok}`);
        let data = await r.json();

        
        return data.result.toString(); // Enkel de waarde van "result" returnen
    }

}

export {Data};
