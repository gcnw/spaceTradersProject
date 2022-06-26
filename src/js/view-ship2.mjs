// import fetch from 'node-fetch';
import api_key from './config.js';

//Placeholder - Add selection ability later
let shipSymbol = "XINIX707-1";

const viewShipURL = `https://v2-0-0.alpha.spacetraders.io/my/ships/${shipSymbol}`;

export const fetchViewShip = fetch(viewShipURL,{
    "method":"GET",
    "headers": {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${ api_key }`
    }
});

export function getViewShipJSON(response){
    viewShip.innerHTML = '[RESPONSE RECEIVED]';
    if(response.ok){
        localStorage.setItem('Current Ship', response.json());
        return response.json();
    }
    else {
        throw new Error('[REQUEST FAILED]');
    }
}

function printViewShipJSON(jsonData){
    viewShip.innerHTML = '';
    printViewShipValues(jsonData);
}

function printViewShipValues(jsonData){
    for(let item in jsonData){
        if(jsonData[item] instanceof Object){
            printViewShipValues(jsonData[item]);
        }
        else
            viewShip.innerHTML += jsonData[item] + "<br>"
    }
}

export default {fetchViewShip,getViewShipJSON};