import { data, userData, registerNewUser, getUserInfo  } from './src/js/get-userdata.mjs';
console.log(data.data.token)
getUserInfo(data.data.token)
const serverStatus = document.getElementById('serverStatus');
const statusURL = "https://api.spacetraders.io/game/status"


async function retriveServerStatus(){
    await fetch(statusURL,{cache:"no-cache"})
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error('Request Failed');
            }, netErr => console.log(netErr.message))
            .then(jsonResponse => {
                serverStatus.innerHTML = jsonResponse['status'];
            });
}
const retriveServerStatus2 = async () => {
    fetch("https://v2-0-0.alpha.spacetraders.io/", {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(jsonData => {
            console.log(jsonData)
        })
        .catch(err => {
            console.error(err);
        })
}



window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    //retriveServerStatus2() <-- not needed rn but works

})