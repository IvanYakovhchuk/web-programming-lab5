window.onload = function() {

    const cookiesData = getCookie("minMaxData");

    if (cookiesData) {

        const userResponse = confirm(`Знайдено збережені дані: ${cookiesData}. Ви хочете їх видалити?`);

        if (userResponse) {
            deleteCookie("minMaxData");
            location.reload();
        } else {
            alert("Будь ласка, перезавантажте сторінку для застосування змін.");
        }

    }
};

const f3Button = document.getElementById("f3");
f3Button.addEventListener("click", function() {
    const numbers = [];
    for (let i = 1; i <= 10; i++) {
        let num = parseFloat(document.getElementById("num" + i).value);
        if (!isNaN(num)) {
            numbers.push(num);
        }
    }

    if (numbers.length === 10) {
        const minNumber = Math.min(...numbers);
        const maxNumber = Math.max(...numbers);

        alert(`Мінімальне число: ${minNumber}\nМаксимальне число: ${maxNumber}`);
        const resultData = `Мінімальне: ${minNumber}, Максимальне: ${maxNumber}`;
        setCookie("minMaxData", resultData, 7);

        document.getElementById("block5").style.display = "none";
    } else {
        alert("Будь ласка, введіть всі 10 чисел.");
    }
});

function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    let cookieArr = document.cookie.split(";");

    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");

        if (name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }

    return null;
}

function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}