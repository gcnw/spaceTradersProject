export class SpaceTradersGet {
    constructor(getURL,documentID, apiKey){
        this.getURL = getURL;
        this.documentID = documentID;
        this.apiKey = apiKey;  /* || localStorage.getItem('api_key') */
    }

    fetchData(){
        fetch(this.getURL,{
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.apiKey}`
    }})};

    getJSON(response){
        this.documentID.innerHTML = '[RESPONSE RECEIVED]';
        if(response.ok){
            return response.json();
        }
        else {
            throw new Error('[REQUEST FAILED]')
        }
    }

    printJSON(jsonData){
        this.documentID.innerHTML = '';
        printValues(jsonData);
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

    async getRequestedData() {
        if(localStorage.getItem(`${this.documentID}` == null)){
            await fetchData
                .then(response => this.getJSON(response))
                .then(jsonData => {
                    this.printJSON(jsonData);
                    localStorage.setItem(`${this.documentID}`, "[RETRIEVED]");
                })
                .catch(error => console.log(error));
        }
    }
}

export default { SpaceTradersGet };