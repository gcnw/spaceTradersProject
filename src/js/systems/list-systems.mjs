// This module will return a list of all systems.
import { SpaceTradersGet } from "../spaceTradersGet.mjs";

const systemsListURL = "https://v2-0-0.alpha.spacetraders.io/systems";
const systemsListContainer = document.getElementById('list-systems-response');

export const getSystemsCall = new SpaceTradersGet(systemsListURL, systemsListContainer)
document.getElementById('list-systems-button').addEventListener('click', () => getSystemsCall.fetchData())


