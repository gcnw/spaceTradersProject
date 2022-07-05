import { SpaceTradersFetch } from '../SpaceTradersFetch.mjs'

//Placeholder 
let systemSymbol = "X1-OE"

const viewSystemURL = `https://v2-0-0.alpha.spacetraders.io/systems/${systemSymbol}`
const viewSystemContainer = document.getElementById('view-system-response');

export const viewSystemCall = new SpaceTradersFetch(viewSystemURL, viewSystemContainer);
document.getElementById('view-system-button').addEventListener('click', () => viewSystemCall.fetchData());