import { SpaceTradersFetch } from "../SpaceTradersFetch.mjs"

//Placeholder - Add selection ability later
let systemSymbol = "X1-OE" 
//-----------------------------------------------------------------

const marketListURL = `https://v2-0-0.alpha.spacetraders.io/systems/${ systemSymbol }/markets`;
const marketListContainer = document.getElementById('list-markets-response');

const listMarketsCall = new SpaceTradersFetch(marketListURL, marketListContainer);
document.getElementById('list-markets-button').addEventListener('click', () => listMarketsCall.fetchData());


