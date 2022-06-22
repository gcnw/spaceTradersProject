import fetch from 'node-fetch';
import api_key from './config.js';

//Placeholder - Add selection ability later
let shipSymbol = "XINIX707-1";

const viewShipURL = `https://v2-0-0.alpha.spacetraders.io/my/ships/${shipSymbol}`;

const fetchViewShip = fetch(viewShipURL,{
    "method":"GET",
    "headers": {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${ api_key }`
    }
});

export default fetchViewShip;