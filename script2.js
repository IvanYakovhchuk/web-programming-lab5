const f2Button = document.getElementById("f2");
const leftContainer = document.querySelector(".left");
let count1 = 0;
let areaElement;

function rhombusSquare(side, degree) {
    return Math.pow(side, 2) * Math.sin(degree);
}

f2Button.addEventListener("click", () => {
    count1++;
    const side = 5;
    const degreeBetweenSides = Math.PI/6;

    if (count1 % 2 !== 0) {
        if (!areaElement) {
            areaElement = document.createElement("p");
            areaElement.id = "rhombus-area";
            areaElement.innerText = `Площа ромба: ${rhombusSquare(side, degreeBetweenSides).toPrecision(2)} одиниць площі`;
            leftContainer.appendChild(areaElement);
        }
    } else {
        if (areaElement) {
            leftContainer.removeChild(areaElement);
            areaElement = null;
        }
    }
});