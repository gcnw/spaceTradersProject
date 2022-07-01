const contractList = document.getElementById('contractList');
const contractListURL = 'https://v2-0-0.alpha.spacetraders.io/my/contracts';


async function getContractList(){
  contractList.innerHTML = '[STARTING FETCH]';
  await fetch(contractListURL, {
      "cache":"no-cache",
      "method": "GET",
      "headers": {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${ api_key }`
      }
        })
          .then(response => {
            contractList.innerHTML= '[RESPONSE RECEIVED]';
            if(response.ok) {
              return response.json()}
            else {
              throw new Error('[REQUEST FAILED]');
            }
          }, networkError => console.log(networkError))
          .then(jsonResponse => {
            contractList.innerHTML = '';
            printContractValues(jsonResponse);
          })
          .catch(error => console.log(error))
}

function printContractValues(jsonData) {
  for(let item in jsonData){
    if(jsonData[item] instanceof Object){
      printContractValues(jsonData[item]);
    }
    else 
      contractList.innerHTML += jsonData[item] + "<br>"
  }
}

console.log('LOADED:[list-contracts]')

//  Resources used:
//
//  https://www.tutorialrepublic.com/javascript-tutorial/javascript-json-parsing.php