//----------------------------------------------------
//  GCNW
//  06JUN2022

const shipList = document.getElementById("shipList");
const shipListURL = "https://v2-0-0.alpha.spacetraders.io/my/ships";

function getShipList(){
var jsonXHR = new XMLHttpRequest(); //  pre-fetch() data retrieval

jsonXHR.onreadystatechange = function() {
    shipList.innerHTML= '[RESPONSE RECEIVED]';
    if(this.readyState === 4 && this.status === 200){
        var jsonResponse = JSON.parse(this.responseText);
        shipList.innerHTML = '';
        outputJSON(jsonResponse);
    }
};

jsonXHR.open("GET", shipListURL, true); //  open(method, url, async, user, password)

jsonXHR.setRequestHeader("Content-Type","application/json");
jsonXHR.setRequestHeader("Authorization", `Bearer ${ api_key }`);

jsonXHR.send(); 
//  If the request is asynchronous (which is the default), this method returns as soon 
//  as the request is sent and the result is delivered using events. If the request is 
//  synchronous, this method doesn't return until the response has arrived.
//
//  This sounds similar to a promise.
}

function outputJSON(jsonResponse){
    for(let item in jsonResponse){
        if(jsonResponse[item] instanceof Object){
            outputJSON(jsonResponse[item]);
        }
        else
        shipList.innerHTML += jsonResponse[item] + "<br>";
    }
}

console.log('LOADED:[list-ships]')
      
//----------------------------------------------------
// Things I (may have) learned:
//
//  https://stealthbits.com/blog/how-to-hide-api-keys-github/
//      -you CANT truly hide API keys on the front-end
//  
//  https://www.freecodecamp.org/news/how-to-use-environment-variables-in-vanillajs/
//      -make a config.js and store it in there
//      -export the variable
//      -add config.js to .gitignore
//
//  https://www.w3schools.com/js/js_json_http.asp
//      -retrieve JSON without fetch()
//
//  https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//      - HTTP response status codes
//----------------------------------------------------
//  XMLHttpRequest.readyState
//  0 - UNSENT  2 - HEADERS_RECEIVED  4 - DONE
//  1 - OPENED  3 - LOADING