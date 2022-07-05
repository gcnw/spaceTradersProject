//TODO: Update class to accept more headers with constructor

export class SpaceTradersFetch {
    constructor(getURL,documentID,body){
        this.getURL = getURL;
        this.documentID = documentID;
        this.body = body;
    }

    async fetchData(){
        console.log(`[FETCHING: ${this.documentID.id}]`)
        const apiKey = localStorage.getItem('apiKey');

        let apiHeaders = new Headers();
        apiHeaders.append('Content-Type', 'application/json')
        apiHeaders.append('Authorization', `Bearer ${apiKey}`);

        if( apiKey == null){
            window.alert("API key not found.");
            return null;
        }

        await fetch(this.getURL,{
            "method": "GET",
            "headers": apiHeaders,
            "body": this.body,})
        .then(response => {
            this.documentID.innerHTML = '[RESPONSE RECEIVED]';
            localStorage.setItem(`${this.documentID.id}.status`, response.ok);
            console.log(response);
            if(response.ok){
                return response.json();
                }
            else {
                throw new Error('[REQUEST FAILED]')
                }
            })
        .then(jsonData => {
            localStorage.setItem(`${this.documentID.id}.json`, JSON.stringify(jsonData));
            this.printJSON(jsonData);
            })
        .catch(error => console.log(error));
    
    };

// Main purpose is just to clear innerHTML 

    printJSON(jsonData){
        this.documentID.innerHTML = '';
        this.printValues(jsonData);
    }


    printValues(jsonData){
        for(let item in jsonData){
            if(jsonData[item] instanceof Object){
                this.printValues(jsonData[item]);
            }
            else {
                this.documentID.innerHTML += jsonData[item] + "<br>"
            }
        }
    }
}

export default { SpaceTradersFetch };