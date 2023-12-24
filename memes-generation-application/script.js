let meme = document.getElementById('meme');
let title = document.getElementById('title');
let getMemeBtn = document.getElementById('get-meme-btn');

let url = "https://meme-api.com/gimme/wholesomememes";

async function getMeme() {
    try {
        const res = await fetch(url);
        const response = await res.json();
        const heading = response.title;
        const img = response.url;
        title.innerText = heading
        meme.src = img;
    } catch (error) {
        console.log(error)
    }

}

getMemeBtn.addEventListener('click',getMeme);
window.addEventListener('onload',getMeme);

getMeme();

// const popup = document.querySelector(".popup");
// wifiIcon = document.querySelector(".icon i"),
// popupTitle = document.querySelector(".popup .title"),
// popupDesc = document.querySelector(".desc"),
// reconnectBtn = document.querySelector(".reconnect");

// let isOnline = true;
// let intervalID, timer = 10;

// async function checkYourConnection() {
//     try {
//         const response = await fetch("https://api.github.com/users/nishant-Tiwari24");
//         const res = await response.json();
//         isOnline = response.status >= 200 && response.status <= 299;
        
//     } catch (error) {
//             isOnline = false;
//     }
//     timer = 10;
//     clearInterval(intervalID);
//     handlePopup(isOnline);
// }

// const handlePopup = (status) => {
//     if(status) {
//         wifiIcon.className="uil uil-wifi";
//         popupTitle.innerText = "Connection Restrored";
//         popupDesc.innerHTML = "Your device is successfully connected to internet connection.";
//         reconnectBtn.innerText = "Connected"
//         reconnectBtn.style.backgroundColor = 'green'
//         popup.classList.add("online");
//         return setTimeout(() => popup.classList.remove("show","online"),2000);
//     }
//     else {
//         wifiIcon.className = "uil uil-wifi-slash";
//         popupTitle.innerText = "No Internet Connection";
//         popupDesc.innerHTML = "Your network is unavailable. We will attmept to reconnect you in <b>10</b> seconds";
//         popup.className = "popup show";
//         reconnectBtn.innerText = "Reconnect Now"

//         intervalID = setInterval(function() {
//             timer--;
//             if(timer === 0) checkYourConnection();
//             popupDesc.querySelector("b").innerText = timer;
            
//         },1000)
//     }
// }

// setInterval(()=> isOnline && checkYourConnection(),3000);
// reconnectBtn.addEventListner('click',checkYourConnection);