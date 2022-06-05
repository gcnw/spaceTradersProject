const contractList = document.getElementById('contractList');
const contractListURL = 'https://v2-0-0.alpha.spacetraders.io/my/contracts';
let jsonTest = {}

async function getContractList(){
  contractList.innerHTML = '[STARTING FETCH]';
  await fetch("https://v2-0-0.alpha.spacetraders.io/my/contracts", {
      "cache":"no-cache",
      "method": "GET",
      "headers": {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiVEVTVFVTRVIiLCJpYXQiOjE2NTQzMTA0MjksInN1YiI6ImFnZW50LXRva2VuIn0.nu-JCL1AlH9vl5F5d8ratLyS-W_qx3IcSNOGWBFMFenX5FVFRsbBM5wfupzEFj2zvRi12T5qhHfZ8W510erpU1zUY2F4OddH0LWHmqH_CFLWeADrtlE-oxOn4jaXxenp0KI1gbqNTURfmLjXz7rTyFC6KOxKm06Tl9HZZ7256puSiF0BLTQV_6LhnJyI3uF7Bf7c7wDWcVrLacnbP2ImtCBYiauUYQfC5dHmmoo_89dcCGGppgaR86FkmrhbgwWhNn0PqQJ9QbY-Ud_G7YJwFueB5TswhqT70WBdbYgjuHLfhbhKNxxKHX1IFjcMPlLShBny0JBREt06ygRskZAXafPA-6Klmc6NBEc3HefKlJaJtGpFtHylrRuX1owAnb1RhhlE-JM2L8LJbYWm1tMbZZLRYv1WdcX4zqKtn1uIhnLiW2Fv7vgZUqx1dMy1YD8zx5o7Ay58RJplO78R-ksL_9NbgPDypIf_D8bJex67UW6S1nb7TLrU6ORnlwifjJmP"
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
            printValues(jsonResponse);
          })
          .catch(error => console.log(error))
}

function printValues(jsonData) {
  for(let item in jsonData){
    if(jsonData[item] instanceof Object){
      printValues(jsonData[item]);
    }
    else 
      contractList.innerHTML += jsonData[item] + "<br>"
  }
}

console.log('LOADED:[list-contracts]')

//  Resources used:
//
//  https://www.tutorialrepublic.com/javascript-tutorial/javascript-json-parsing.php