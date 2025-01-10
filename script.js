function calculateDaysSince(dateString) {
    const startDate = new Date(dateString);
    const today = new Date();
    const diffTime = today - startDate; 
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
}

function updateDaysCounter() {
    const days = calculateDaysSince("2022-02-22");
    const counterElement = document.getElementById("days-counter");
    counterElement.textContent = `Война идёт ${days} дней`;
}

updateDaysCounter();
