"use strict";
function createSeatingChart() {
    console.log("Seating chart function started"); // Check if function is called
    var svgNamespace = "http://www.w3.org/2000/svg";
    var container = document.getElementById("svg-container");
    if (!container) {
        console.error("SVG container not found");
        return;
    }
    var svg = document.createElementNS(svgNamespace, "svg");
    svg.setAttribute("width", "800");
    svg.setAttribute("height", "600");
    svg.setAttribute("viewBox", "0 0 800 600");
    svg.setAttribute("fill", "none");
    svg.setAttribute("style", "border: 1px solid black;");
    console.log("SVG element created"); // Check if SVG is being created
    // Append to container
    container.appendChild(svg);
    console.log("SVG appended to container"); // Check if SVG is appended
}
window.onload = function () {
    console.log("Calling createSeatingChart()");
    createSeatingChart(); // Function is called when the window loads
};
