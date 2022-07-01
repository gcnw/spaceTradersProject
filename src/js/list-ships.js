//----------------------------------------------------
//  GCNW
//  01JUL2022
//
import { SpaceTradersGet } from "./spaceTradersGet.mjs";

const shipListURL = "https://v2-0-0.alpha.spacetraders.io/my/ships";
const shipListContainer = document.getElementById("ship-list-response");

export const shipListCall = new SpaceTradersGet(shipListURL, shipListContainer);
document.getElementById('list-ships-button').addEventListener('click', () => shipListCall.fetchData());
