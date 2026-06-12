makeElementDraggable(document.getElementById("welcome"));

function makeElementDraggable(element) {
    if (!element) return;

    var initialX = 0, initialY = 0;
    var currentX = 0, currentY = 0;

    var header = document.getElementById(element.id + "header");
    if (header) {
        header.onmousedown = startDragging;
    } else {
        element.onmousedown = startDragging;
    }

    function startDragging(e) {
        e = e || window.event;
        e.preventDefault();

        initialX = e.clientX;
        initialY = e.clientY;

        element.style.transform = "none";

        document.onmouseup = stopDragging;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;

        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

var welcomeScreen = document.querySelector("#welcome");

function closeWindow(element) {
    element.style.display = "none";
}

function openWindow(element) {
    element.style.display = "flex";
}

var welcomeScreenO = document.querySelector("#welcomeOpen");
var welcomeScreenC = document.querySelector("#welcomeClose");

welcomeScreenC.addEventListener("click", function () {
    closeWindow(welcomeScreen);
});

welcomeScreenO.addEventListener("click", function () {
    openWindow(welcomeScreen);
});