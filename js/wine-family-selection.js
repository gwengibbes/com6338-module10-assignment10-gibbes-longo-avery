//This is specifically for the wine family selection page (homepage)//

document.addEventListener("DOMContentLoaded", (event) => {
    // When the DOM is completely loaded, add event listeners to each button for wine family selection

    const redWineButtonEl = document.querySelector('#redWineSelection');
    const whiteWineButtonEl = document.querySelector('#whiteWineSelection');

    redWineButtonEl.addEventListener('click', () => {
        localStorage.setItem('sml.winePref', 'red');
        window.location = './wine-pairing/';
    });


    whiteWineButtonEl.addEventListener('click', () => {
        localStorage.setItem('sml.winePref', 'white');
        window.location = './wine-pairing/';
    });
});