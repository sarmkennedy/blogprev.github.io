const hoursElements = document.querySelectorAll('.hours');
const timeframeButtons = document.querySelectorAll('.timeframes button');
console.log(hoursElements);
console.log("Found " + hoursElements.length + " hour elements");
console.log("Found " + timeframeButtons.length + " timeframe buttons");

timeframeButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("A button was clicked!");
        console.log("The button text was: " + button.textContent);
    });
});