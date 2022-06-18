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



function getMarketListJSON(response){
    marketList.innerHTML = '[RESPONSE RECEIVED]';
    if(response.ok){    
        return response.json();}
    else {  
        throw new Error('[REQUEST FAILED]');}
}

function printMarketListJSON(jsonData){
    marketList.innerHTML = '';
    printValues(jsonData);
}

function printMarketListValues(jsonData) {
    for(let item in jsonData){
      if(jsonData[item] instanceof Object){
        printMarketListValues(jsonData[item]);
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
                getMarketListJSON(response))
            .then(jsonData => {
                printMarketListJSON(jsonData);
                localStorage.setItem('marketListRetrieved',true)
            })
            .catch(error => console.log(error));
    }
}

console.log('LOADED:[list-markets]');