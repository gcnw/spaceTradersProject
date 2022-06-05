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

