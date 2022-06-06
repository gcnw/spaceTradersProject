

const serverStatus = document.getElementById('serverStatus');
const statusURL = "https://api.spacetraders.io/game/status"

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

const registerNewUser = async user => {
    return // a new user has to be saved on the first call else the token is registered but we 
    // never saved the token to access the user later on
    await fetch("https://v2-0-0.alpha.spacetraders.io/agents", {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "Authorization": "Bearer undefined"
        },
        "body": "{\"symbol\":\"" + user +"\",\"faction\":\"COMMERCE_REPUBLIC\"}"
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
      });
}

// example user data saved after regsitering
const userData = {
    "data": {
        "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiWElOSVg3MDciLCJpYXQiOjE2NTQ1MDAxNDEsInN1YiI6ImFnZW50LXRva2VuIn0.qZ55ksChPweGk1iWWHq5nTIZjYuNE6pCLxSjoY1bCMoBR9AQ_DD8KvwAHgxV43cyxb4mip5F3f68hRmniSkDnWMjOpWNOQgbWOnb4LY5CDJHwd2sJHy3lCwwGMiMJXV-zcsFmnTYMp1BJdn-2GO0TaPlps92MNly4UyakjXz6wkDMClcLzW0QIg1rsKV04tOPdK5TImPUsSkNEvBcQvNuaLRTnlk8TlMpoktt5di9Cf2l0rWU-eQbIa4x-Vyo1Eps3zkijh1a5B0mvOTpZfjA9t2XDI8usMpNmDUSTW0qPyfWbWfo8oWGN76VoM_h-_SSTF8jc9kXYy1oOHyAYldi3UuaA8bpmvguTDtP9FxpJhVEukUSGi9bfj6eQViROw5gXeZSH7ZFAKqjdX-GOggvXg8Xf9247JmsTcnqrqljRjUdysYyXuBCJK4RM1JhWh3beWbiUM8T7BvyQt_HJPpJPhF0guedRdiVFZiG_cW6174bKk0DVk0odo65qqSRz22",
        "agent": {
            "accountId": "cl42enzlm023501s6vsuc3ahy",
            "symbol": "XINIX707",
            "headquarters": "X1-OE-PM",
            "credits": 100000
        },
        "contract": {
            "id": "cl42enznj024601s6dwwzc72f",
            "faction": "COMMERCE_REPUBLIC",
            "type": "PROCUREMENT",
            "terms": {
                "deadline": "2022-06-20T07:22:21.630Z",
                "payment": {
                    "onAccepted": 30000,
                    "onFulfilled": 120001
                },
                "deliver": [
                    {
                        "tradeSymbol": "IRON_ORE",
                        "destination": "X1-OE-PM",
                        "units": 500,
                        "fulfilled": 0
                    }
                ]
            },
            "accepted": false,
            "fulfilled": false,
            "expiresAt": "2022-06-13T07:22:21.630Z"
        },
        "faction": {
            "symbol": "COMMERCE_REPUBLIC",
            "name": "Commerce Repubic",
            "description": "The Commerce Republic takes capital from top tier worlds and invests it into new systems with high potential for growth.",
            "headquarters": "X1-OE-PM",
            "traits": [
                "BUREAUCRATIC",
                "CAPITALISTIC",
                "GUILD",
                "ESTABLISHED"
            ]
        },
        "ship": {
            "symbol": "XINIX707-1",
            "crew": null,
            "officers": null,
            "fuel": 1200,
            "frame": "FRAME_FRIGATE",
            "reactor": "REACTOR_FUSION_I",
            "engine": "ENGINE_ION_DRIVE_II",
            "modules": [
                "MODULE_GAS_TANK",
                "MODULE_CARGO_HOLD",
                "MODULE_CARGO_HOLD",
                "MODULE_CREW_QUARTERS",
                "MODULE_ENVOY_QUARTERS",
                "MODULE_JUMP_DRIVE_I"
            ],
            "mounts": [
                "MOUNT_SENSOR_ARRAY_II",
                "MOUNT_MINING_LASER_II",
                "MOUNT_GAS_SIPHON_II"
            ],
            "stats": {
                "fuelTank": 1200,
                "cargoLimit": 280,
                "jumpRange": 20
            },
            "registration": {
                "factionSymbol": "COMMERCE_REPUBLIC",
                "agentSymbol": "XINIX707",
                "fee": 0,
                "role": "COMMAND"
            },
            "integrity": {
                "frame": 1,
                "reactor": 1,
                "engine": 1
            },
            "status": "DOCKED",
            "location": "X1-OE-PM",
            "cargo": []
        }
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    //retriveServerStatus2() <-- not needed rn but works

})