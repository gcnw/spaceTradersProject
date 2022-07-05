import { SpaceTradersFetch } from "./SpaceTradersFetch.mjs";

const contractListURL = 'https://v2-0-0.alpha.spacetraders.io/my/contracts';
const contractListContainer = document.getElementById('contract-list-response');

const listContractsCall = new SpaceTradersFetch(contractListURL, contractListContainer);
document.getElementById('list-contracts-button').addEventListener('click', () => listContractsCall.fetchData());
