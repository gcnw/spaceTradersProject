//Placeholder - Add selection ability later
let shipSymbol = "XINIX707-1";
const viewShipURL = `https://v2-0-0.alpha.spacetraders.io/my/ships/${shipSymbol}`;
const viewShipContainer = document.getElementById('viewShipResponse')

import { SpaceTradersGet } from "./spaceTradersGet.mjs"

const viewShipCall = new SpaceTradersGet(viewShipURL,viewShipContainer, apiKey);
