import { SpaceTradersFetch } from "../spaceTradersFetch.mjs"

//Placeholder
let shipSymbol = "XINIX707-1";

const scanCooldownURL = `https://v2-0-0.alpha.spacetraders.io/my/ships/${shipSymbol}/scan`;
const scanCooldownContainer = document.getElementById('scan-cooldown-response');

export const scanCooldownCall = new SpaceTradersFetch(scanCooldownURL, scanCooldownContainer);
document.getElementById('scan-cooldown-button').addEventListener('click', () => scanCooldownCall.fetchData())