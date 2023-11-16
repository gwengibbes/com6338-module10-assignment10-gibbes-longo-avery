/*
    This is specifically for the wine family selection page (homepage)
*/

// Below we should delete "async" keyword since nothing is async here

document.addEventListener("DOMContentLoaded", async (event) => {
    // When the DOM is completely loaded, add event listeners to each button for wine family selection

    const redWineButtonEl = document.querySelector('#redWineSelection');
    const whiteWineButtonEl = document.querySelector('#whiteWineSelection');

    redWineButtonEl.addEventListener('click', () => {
        localStorage.setItem(window.lsWinePrefKey, 'red');
        window.location = '/wine-pairing/';
    });


    whiteWineButtonEl.addEventListener('click', () => {
        localStorage.setItem(window.lsWinePrefKey, 'white');
        window.location = '/wine-pairing/';
    });
});

