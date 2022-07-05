import { userData, registerNewUser, getUserInfo  } from './src/js/agents/get-userdata.mjs';




window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    //retriveServerStatus2() <-- not needed rn but works
    

    // THIS REGISTERS A NEW USER
    // 

    const registerButton = document.getElementById("registerUser")
    registerButton.style.color = "green"
    const userInput = document.getElementById("userAccount")

    registerButton.addEventListener("click", event => {
      
        const userName = userInput.value
        // This should be a promise to wait for the answer
        // and put 
        registerNewUser(userName)

    } )
    
        // THIS FETCHES THE NEEDED DATA:
    const userDataButton = document.getElementById("userStatusButton")
    userDataButton.style.color = "red"
    const userDataResponse = document.getElementById("userDataResponse")

    userDataButton.addEventListener("click", event => {
      
        
        // This should be a promise to wait for the answer
        // and put 
        getUserInfo(userData.data.token, userDataResponse)

    } )
   
    

    
    // THIS HOLDS CRITICAL DATA.. NOT SURE HOW TO HANDLE IT
    console.log(userData.data.agent.symbol)

})