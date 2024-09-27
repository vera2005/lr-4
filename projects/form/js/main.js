function capi(string) {
    if (!string) return ""; // Обработка пустой строки
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

btnEl = document.querySelector(".button"); // получем элемент с классомbutton
inputName = document.querySelector("#name");//получаем элемент с id name
inputSur = document.querySelector("#surname"); // получаем элемент с id surname
resEl = document.querySelector(".result"); 



btnEl.addEventListener("click", function(){
    if(inputName.value==="" && inputSur.value===""){
        inputName.style.borderColor = "red"; // окраска рамок в красный цвет
        inputSur.style.borderColor = "red";
        resultElement.textContent = "";// очистка поля вывода
    }
    else if(inputName.value!=="" && inputSur.value===""){
        inputName.style.borderColor = "green"; // окраска рамок в красный цвет
        inputSur.style.borderColor = "red";
        resEl.textContent = `Здравствуйте, ${capi(inputName.value)}!`
    }
    else if(inputName.value==="" && inputSur.value!==""){
        inputName.style.borderColor = "red"; // окраска рамок в красный цвет
        inputSur.style.borderColor = "green";
        resEl.textContent = `Здравствуйте, ${capi(inputSur.value)}!`
    }
    else{
        inputName.style.borderColor = "green"; // окраска рамок в красный цвет
        inputSur.style.borderColor = "green";
        resEl.textContent = `Здравствуйте, ${capi(inputName.value)} ${capi(inputSur.value)}!`
    }
})