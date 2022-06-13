//Placeholder - Add selection ability later
let systemSymbol = "X1-OE" 
//-----------------------------------------------------------------
const marketList = document.getElementById('marketList');
const marketListURL = `https://v2-0-0.alpha.spacetraders.io/systems/${ systemSymbol }/markets`;
//
//-----------------------------------------------------------------
// I think these can be generalized for a bunch of modules
// so we would only need to write them once in some kind of 
// helper module.

const fetchMarkets = fetch(marketListURL,{
    "method": "GET",
    "headers": {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${ api_key }`
    }});



function getJSON(response){
    marketList.innerHTML = '[RESPONSE RECEIVED]';
    if(response.ok){    
        return response.json();}
    else {  
        throw new Error('[REQUEST FAILED]');}
}

function printJSON(jsonData){
    marketList.innerHTML = '';
    printValues(jsonData);
}

function printValues(jsonData) {
    for(let item in jsonData){
      if(jsonData[item] instanceof Object){
        printValues(jsonData[item]);
      }
      else 
        marketList.innerHTML += jsonData[item] + "<br>"
    }
}

//
//-----------------------------------------------------------------
// Then our fetch call would look something like this for everything:

async function getMarketList() {
    if(localStorage.getItem('marketListRetrieved') == null){
        await fetchMarkets
            .then(response => 
                getJSON(response))
            .then(jsonData => {
                printJSON(jsonData);
                localStorage.setItem('marketListRetrieved',true)
            })
            .catch(error => console.log(error));
    }
}

console.log('LOADED:[list-markets]');