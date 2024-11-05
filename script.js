let currentEvent = 0;
const eventWrapper = document.querySelector(".event-wrapper");
const arrow = document.getElementById("arrow-toggle");

arrow.addEventListener("click", function() {
    currentEvent = (currentEvent + 1) % 2; 
    eventWrapper.style.transform = `translateX(-${currentEvent * 50}%)`;

    if (currentEvent === 0) {
        arrow.innerHTML = "&#9654;"; 
    } else {
        arrow.innerHTML = "&#9664;"; 
    }
});

arrow.style.display = "block";
