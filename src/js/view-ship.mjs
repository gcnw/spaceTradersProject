import { SpaceTradersFetch } from "./spaceTradersFetch.mjs"

//Placeholder - Add selection ability later
let shipSymbol = "XINIX707-1";

const viewShipURL = `https://v2-0-0.alpha.spacetraders.io/my/ships/${shipSymbol}`;
const viewShipContainer = document.getElementById('view-ship-response')
let viewShipHeader = new Headers();


export const viewShipCall = new SpaceTradersFetch(viewShipURL,viewShipContainer);
document.getElementById('view-ship-button').addEventListener('click', () => viewShipCall.fetchData());




