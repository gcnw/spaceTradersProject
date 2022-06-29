//Placeholder - Add selection ability later
import { SpaceTradersGet } from "./spaceTradersGet.mjs"

let shipSymbol = "XINIX707-1";
const viewShipURL = `https://v2-0-0.alpha.spacetraders.io/my/ships/${shipSymbol}`;
const viewShipContainer = document.getElementById('viewShipResponse')


export const viewShipCall = new SpaceTradersGet(viewShipURL,viewShipContainer);
document.getElementById('viewShipsButton').addEventListener('click', () => viewShipCall.fetchData());




