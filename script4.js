function changeBorderColor(event) {
    const color = document.getElementById("colorPicker").value;
    event.target.style.borderColor = color;
    localStorage.setItem("borderColor", color);
}

window.addEventListener("load", () => {
    const savedColor = localStorage.getItem("borderColor");
    if (savedColor) {
        const blocks = document.querySelectorAll(".block");
        blocks.forEach(block => {
            block.style.borderColor = savedColor;
        });
        document.getElementById("colorPicker").value = savedColor;
    }
});

const blocks = document.querySelectorAll(".block");
blocks.forEach(block => {
    block.addEventListener("focus", changeBorderColor);
});