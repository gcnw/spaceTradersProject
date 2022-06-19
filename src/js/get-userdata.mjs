const registerNewUser = async user => {
    
    const data = JSON.parse(localStorage.getItem("userData"))
    
    if (data.data.token !== undefined) {
        console.log("User is already registered in local space")
        return
    }  

    await fetch("https://v2-0-0.alpha.spacetraders.io/agents", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer undefined"
        },
        "body": "{\"symbol\":\"" + user + "\",\"faction\":\"COMMERCE_REPUBLIC\"}"
    })
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(jsonData => {
            localStorage.setItem("userData", JSON.stringify(jsonData));
            
        })
        .catch(err => {
            console.error(err);
        });
}


const userData = JSON.parse(localStorage.getItem("userData"))

if (userData.data.token !== undefined) {
    console.log("User is already registered in local space")
}

const getUserInfo = token => {
    if (userData.data.token === undefined) {
        console.log("User is not registered")
        return
    }
    fetch("https://v2-0-0.alpha.spacetraders.io/my/agent", {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
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
        });

}


//console.log(localStorage.getItem("userData"))
//console.dir(JSON.parse(localStorage.getItem("userData")))
export { userData, registerNewUser, getUserInfo }