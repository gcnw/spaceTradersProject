

const serverStatus = document.getElementById('server-status');
const statusURL = "https://v2-0-0.alpha.spacetraders.io/game/status"

async function retriveServerStatus() {
    await fetch(statusURL, { cache: "no-cache" })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request Failed');
        }, netErr => console.log(netErr.message))
        .then(jsonResponse => {
            serverStatus.innerHTML = jsonResponse['status'];
        });
}

