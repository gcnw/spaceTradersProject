//----------------------------------------------------
//  GCNW
//  01JUL2022
//
import { SpaceTradersFetch } from "./SpaceTradersFetch.mjs";

const shipListURL = "https://v2-0-0.alpha.spacetraders.io/my/ships";
const shipListContainer = document.getElementById("ship-list-response");

export const shipListCall = new SpaceTradersFetch(shipListURL, shipListContainer);
document.getElementById('list-ships-button').addEventListener('click', () => shipListCall.fetchData());
