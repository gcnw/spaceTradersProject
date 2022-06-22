// This module will return a list of all systems.
const systemsListDisplay = document.getElementById('systemsList');
const systemsListURL = "https://v2-0-0.alpha.spacetraders.io/systems";


function getSystemsListJSON(response){
    systemsList.innerHTML = '[RESPONSE RECEIVED]';
    if(response.ok){    
        return response.json();}
    else {  
        throw new Error('[REQUEST FAILED]');}
}

function printSystemsListJSON(jsonData){
    systemsList.innerHTML = '';
    printSystemsListValues(jsonData);
}

function printSystemsListValues(jsonData) {
    for(let item in jsonData){
      if(jsonData[item] instanceof Object){
        printSystemsListValues(jsonData[item]);
      }
      else 
      systemsList.innerHTML += jsonData[item] + "<br>"
    }
}

//
//-----------------------------------------------------------------
//
//  Headers()
//  headers.append(name, value)
//  Content-Type, Content-Length

let systemsListHeaders = new Headers();
systemsListHeaders.append("Content-Type","application/json"); 
systemsListHeaders.append("Authorization", `Bearer ${ api_key }`);
//  Request(input, options)
//  input: resource to fetch (uri)
//  options: 
//      method  credentials integrity
//      headers cache       referrer
//      body    redirect    mode
let systemsListRequest = new Request(systemsListURL, {
    method: 'GET',
    headers: systemsListHeaders,
    mode: 'cors'
})

async function getSystemsList() {
    if(localStorage.getItem('SystemsListRetrieved') == null){
        await fetch(systemsListRequest)
            .then(response => 
                getSystemsListJSON(response))
            .then(jsonData => {
                printSystemsListJSON(jsonData);
                localStorage.setItem('SystemsListRetrieved',true)
            })
            .catch(error => console.log(error));
    }
}

console.log('LOADED:[list-systems]');