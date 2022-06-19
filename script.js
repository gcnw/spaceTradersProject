import { userData, registerNewUser, getUserInfo  } from './src/js/get-userdata.mjs';




window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    //retriveServerStatus2() <-- not needed rn but works
    
    // THIS FETCHES THE NEEDED DATA:
    //getUserInfo(userData.data.token)

    // THIS REGISTERS A NEW USER
    // registerNewUser("username")

    // THIS HOLDS CRITICAL DATA.. NOT SURE HOW TO HANDLE IT
    // console.log(userData)

})