const y = document.getElementById("y");
const imgInputForm = document.getElementById("img-input-form");

const desktopMediaQuery = window.matchMedia('min-device-width: 768px');
const mobileMediaQuery = window.matchMedia('(max-device-width: 768px) and (hover: none) and (pointer: coarse)');

if (desktopMediaQuery.matches) {
    y.addEventListener("mouseup", function() {
        if (window.getSelection().toString()) {
            imgInputForm.style.display = "flex";
            imgInputForm.style.flexDirection = "column";
        }
    });
}
else if (mobileMediaQuery.matches) {
    y.addEventListener("touchend", function() {
        if (window.getSelection().toString()) {
            imgInputForm.style.display = "flex";
            imgInputForm.style.flexDirection = "column";
        }
    });
}

const addImageButton = document.getElementById("addImageButton");
const imageUrlInput = document.getElementById("imageUrl");

addImageButton.addEventListener("click", function() {
    if (typeof(Storage) !== "undefined") {
        // Використовуємо localStorage
    } else {
        alert("Local Storage не підтримується вашим браузером.");
    }
    const imageUrl = imageUrlInput.value.trim();
    if (imageUrl) {
        let images = JSON.parse(localStorage.getItem("images")) || [];
        images.push(imageUrl);
        localStorage.setItem("images", JSON.stringify(images));
        displayImages();
    }
});

function displayImages() {
    const blockWithImages = document.getElementById("added-images");
    blockWithImages.style.display = "flex";
    blockWithImages.style.flexDirection = "column";

    const images = JSON.parse(localStorage.getItem("images")) || [];
    blockWithImages.innerHTML = "";

    images.forEach(url => {
        const imgElement = document.createElement("img");
        imgElement.src = url;
        imgElement.alt = "Image";
        imgElement.style.maxWidth = "100%";
        imgElement.style.marginBottom = "10px";
        blockWithImages.appendChild(imgElement);
    });
}

const clearImagesButton = document.getElementById("clearImagesButton");
clearImagesButton.addEventListener("click", function() {
    localStorage.removeItem("images");
    displayImages();
});

window.addEventListener("load", displayImages);