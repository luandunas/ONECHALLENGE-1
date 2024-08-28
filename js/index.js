const tokens = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

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
    console.log(result)
    if (isLowerCase(user_input.value) && user_input.value != "" && isOnlyLetters(user_input.value)) {
        await tokens.forEach(token => result = result.replaceAll(token[0], token[1]));
        showResult(result);
    } else {
        user_input.focus();
        hideResult();
    }
}

const decrypt = async function (e) {
    let user_input = document.getElementById("mainContainer__userInput");
    let result = user_input.value;
    if (isLowerCase(user_input.value) && user_input.value != "" && isOnlyLetters(user_input.value)) {
        tokens.forEach(token => result = result.replaceAll(token[1], token[0]));
        showResult(result);
    } else {
        user_input.focus();
        hideResult();
    }
}

let copyElement = function(div){
    navigator.clipboard.writeText(div.textContent);
    alert("Copiado!");
}