const popup = document.querySelector(".popup");
wifiIcon = document.querySelector(".icon i"),
popupTitle = document.querySelector(".popup .title"),
popupDesc = document.querySelector(".desc"),
reconnectBtn = document.querySelector(".reconnect");

let isOnline = true;
let intervalID, timer = 10;

async function checkYourConnection() {
    try {
        const response = await fetch("https://api.github.com/users/nishant-Tiwari24");
        const res = await response.json();
        isOnline = response.status >= 200 && response.status <= 299;
        
    } catch (error) {
            isOnline = false;
    }
    timer = 10;
    clearInterval(intervalID);
    handlePopup(isOnline);
}

const handlePopup = (status) => {
    if(status) {
        wifiIcon.className="uil uil-wifi";
        popupTitle.innerText = "Connection Restrored";
        popupDesc.innerHTML = "Your device is successfully connected to internet connection.";
        popup.classList.add("online");
        return setTimeout(() => popup.classList.remove("show","online"),2000);
    }
    else {
        wifiIcon.className = "uil uil-wifi-slash";
        popupTitle.innerText = "No Internet Connection";
        popupDesc.innerHTML = "Your network is unavailable. We will attmept to reconnect you in <b>10</b> seconds";
        popup.className = "popup show";

        intervalID = setInterval(function() {
            timer--;
            if(timer === 0) checkYourConnection();
            popupDesc.querySelector("b").innerText = timer;
            
        },1000)
    }
}

setInterval(()=> isOnline && checkYourConnection(),3000);
reconnectBtn.addEventListner('click',checkYourConnection);