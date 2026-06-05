const hoursElements = document.querySelectorAll('.hours');
const timeframeButtons = document.querySelectorAll('.timeframes button');
const previousLabels = document.querySelectorAll('.previous');
const prevHoursElements = document.querySelectorAll('.prev-hours');

let activityData = [];

function updateCards(timeframe) {
    activityData.forEach((activity,index) => {
        const currentValue = activity.timeframes[timeframe].current;
        const previousValue = activity.timeframes[timeframe].previous;

        hoursElements[index].textContent = currentValue;
        prevHoursElements[index].textContent = previousValue;
    });
}

fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        activityData = data;
        console.log("Data loaded!");
        console.log(activityData);
        updateCards('weekly'); 
    })
    .catch(error => {
        console.error("Error loading data:", error);
    });

    timeframeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const timeframe = button.textContent.toLowerCase();
        updateCards(timeframe);
    });
});
