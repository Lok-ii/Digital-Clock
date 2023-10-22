function updateTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' };
    const indianTime = now.toLocaleTimeString('en-IN', options);
    const [hours, minutes, seconds, ampm] = indianTime.split(/:| /);
    
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm.toUpperCase();
}

setInterval(updateTime, 1000);
