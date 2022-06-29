//TODO: Update class to accept more headers with constructor

export class SpaceTradersGet {
    constructor(getURL,documentID){
        this.getURL = getURL;
        this.documentID = documentID;
    }

    async fetchData(){
        const apiKey = localStorage.apiKey;

        if( apiKey == null){
            window.alert("API key not found.");
            return null;
        }

        await fetch(this.getURL,{
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
                }})
        .then(response => {
            this.documentID.innerHTML = '[RESPONSE RECEIVED]';
            localStorage.setItem(`${this.documentID.id}`, response.ok);
            console.log(response);
            if(response.ok){
                return response.json();
                }
            else {
                throw new Error('[REQUEST FAILED]')
                }
            })
        .then(jsonData => {
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

export default { SpaceTradersGet };