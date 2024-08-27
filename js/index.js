const isLowerCase = function (str) {
    if (str === str.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

const isOnlyLetters = function (str) {
    let pattern = /[^a-zA-Z ]/g
    return !pattern.test(str);
}

const showResult = function (result) {
    let asideImg = document.getElementById("asideImg");
    let asideTexts = document.getElementById("resultContainer__texts");
    let pResult = document.getElementById("result");
    let containerResult = document.getElementById("resultContainer__result");

    asideImg.style.display = "none";
    asideTexts.style.display = "none";

    pResult.textContent = result;
    containerResult.style.display = "flex";
}

const hideResult = function () {
    let asideImg = document.getElementById("asideImg");
    let asideTexts = document.getElementById("resultContainer__texts");
    let pResult = document.getElementById("result");
    let containerResult = document.getElementById("resultContainer__result");

    asideImg.style.display = "flex";
    asideTexts.style.display = "flex";

    pResult.textContent = "";
    containerResult.style.display = "none";
}

const crypt = async function (e) {
    let user_input = document.getElementById("mainContainer__userInput");
    let result = user_input.value;
    if (isLowerCase(user_input.value) && user_input.value != "" && isOnlyLetters(user_input.value)) {
        result = result.replace(/e/g, "enter");
        result = result.replace(/i/g, "imes");
        result = result.replace(/a/g, "ai");
        result = result.replace(/o/g, "ober");
        result = result.replace(/u/g, "ufat");
        showResult(result);
    } else {
        user_input.focus();
        hideResult();
    }
}

const decrypt = async function (e) {
    let user_input = document.getElementById("mainContainer__userInput");
    let result = user_input.value;
    console.log("EMPTY STRING: " + user_input.value != "" )
    console.log("LOWER CASE: " + isLowerCase(user_input.value));
    console.log("ONLY LETTERS: " + isOnlyLetters(user_input.value));
    if (isLowerCase(user_input.value) && user_input.value != "" && isOnlyLetters(user_input.value)) {
        result = result.replace(/enter/g, "e");
        result = result.replace(/imes/g, "i");
        result = result.replace(/ai/g, "a");
        result = result.replace(/ober/g, "o");
        result = result.replace(/ufat/g, "u");
        showResult(result);
    } else {
        user_input.focus();
        hideResult();
    }
}