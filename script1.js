const f1Button = document.getElementById("f1");
const text2 = document.getElementById("text2");
const text6 = document.getElementById("text6");
const headerContainer = document.getElementById("header");
const footerContainer = document.getElementById("footer");
let count = 0;

f1Button.addEventListener("click", () => {
    count++;
    if (count % 2 != 0) {
        headerContainer.removeChild(text2);
        footerContainer.removeChild(text6);
        
        headerContainer.prepend(text6);
        footerContainer.appendChild(text2);
    }
    else {
        headerContainer.removeChild(text6);
        footerContainer.removeChild(text2);
        
        headerContainer.prepend(text2);
        footerContainer.appendChild(text6);
    }
});