import { SpaceTradersGet } from "./spaceTradersGet.mjs"

//Placeholder - Add selection ability later
let shipSymbol = "XINIX707-1";

const viewShipURL = `https://v2-0-0.alpha.spacetraders.io/my/ships/${shipSymbol}`;
const viewShipContainer = document.getElementById('view-ship-response')


export const viewShipCall = new SpaceTradersGet(viewShipURL,viewShipContainer);
document.getElementById('view-ship-button').addEventListener('click', () => viewShipCall.fetchData());




