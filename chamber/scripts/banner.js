const currentDay = new Date();
const dayValue = currentDay.getDay();


function displayBanner() {
    if (dayValue == 1 || 2 || 3)
        document.querySelector('.banner').style.display = 'block';
    else
        document.querySelector('.banner').style.display = 'none';
}

displayBanner();