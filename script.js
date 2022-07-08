`use strict`;

const clock = (async function() {
    try {
        const messageClock = document.createElement(`span`);
        document.querySelector(`body`).appendChild(messageClock);
        setInterval(() => {
            const now = new Date();
            let hours = (now.getHours() % 12 || 12).toString().padStart(2, 0);
            let minutes = now.getMinutes().toString().padStart(2, 0);
            let seconds = now.getSeconds().toString().padStart(2, 0);
            let amPm = now.getHours() < 12 ? `am` : `pm`;
            messageClock.textContent = `your local time is: ${hours} : ${minutes} : ${seconds} ${amPm}`;
        }, 1000);
    } catch (err) {
        console.log(`clock error: ${err}`);
    }
})();

const ipLocator = (async function() {
    try {
        const messageIpLocator = document.createElement(`span`);
        document.querySelector(`body`).appendChild(messageIpLocator);
        fetch(`https://api.ipify.org?format=json`)
            .then((res) => res.json())
            .then(
                (data) =>
                (messageIpLocator.textContent = `your public ip is: ${data.ip}`)
            );
    } catch (err) {
        console.log(`ipLocator error ${err}`);
    }
})();

const locatia = (async function() {
    try {
        const messageLocation = document.createElement(`span`);
        document.querySelector(`body`).appendChild(messageLocation);
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            messageLocation.textContent = `your geolocation coordinates are: latitude = ${lat} --- longitude = ${long}`;
        });
    } catch (err) {
        console.log(`!!!! ${err}`);
    }
})();

// (()=>{})() iife function