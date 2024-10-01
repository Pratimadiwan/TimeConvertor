function convertTime() {
    const timeInput = document.getElementById("time-input").value.trim();
    const resultSpan = document.getElementById("result");

    resultSpan.style.display = 'none';
    resultSpan.innerHTML = '';

    const twelveHourPattern = /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i;
    const twentyFourHourPattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

    if (/AM|PM/i.test(timeInput) && twentyFourHourPattern.test(timeInput)) {
        resultSpan.innerHTML = '<span style="color: red;">Invalid input: 24-hour format should not include AM/PM.</span>';
        resultSpan.style.display = 'inline';  
        return;
    }

    if (twelveHourPattern.test(timeInput)) {
        let timeParts = timeInput.match(/(0?[1-9]|1[0-2]):[0-5][0-9]/)[0];
        let period = timeInput.match(/(AM|PM)/i)[0].toUpperCase();
        let [hours, minutes] = timeParts.split(':');
        hours = parseInt(hours, 10);

      
        
        if (period === 'PM' && hours !== 12) {
            hours += 12;
        }
        if (period === 'AM' && hours === 12) {
            hours = 0;
        }

      
        
        resultSpan.innerHTML = `<span style="color: blue;">${String(hours).padStart(2, '0')}</span>:<span style="color: green;">${minutes}</span>`;
    } 
   
    
    else if (twentyFourHourPattern.test(timeInput)) {
        let [hours, minutes] = timeInput.split(':');
        hours = parseInt(hours, 10);
        let period = hours >= 12 ? 'PM' : 'AM';
        let twelveHour = hours % 12 || 12; 
    
        resultSpan.innerHTML = `<span style="color: blue;">${twelveHour}</span>:<span style="color: green;">${minutes}</span> <span style="color: red;">${period}</span>`;
    } 
    
    
    else {
        resultSpan.innerHTML = '<span style="color: red;" class="error-msg">Invalid time format. Please enter a valid time.</span>';
    }
    resultSpan.style.display = 'block';
}
function toggleText() {
    var moreText = document.getElementById("more-text");
    var readMoreLink = document.getElementById("read-more");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        readMoreLink.innerHTML = "Read Less";
    } else {
        moreText.style.display = "none";
        readMoreLink.innerHTML = "Read More";
    }
}