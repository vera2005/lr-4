function capi(string) {
    if (!string) return ""; // Обработка пустой строки
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const inputName = document.querySelector("input[name='name']"); // Получаем элемент с id name
const inputSur = document.querySelector("input[name='surname']"); // Получаем элемент с id surname
const btn = document.querySelector(".button"); // Получаем элемент с классом btn
const allPos = document.querySelectorAll('input[type="checkbox"]'); // Получаем все checkbox
const allInp = document.querySelectorAll('input[type="number"]'); // Получаем все unput
const resSum = document.querySelector(".summa"); 

for (const checkButton of allPos) { // Перебор всех checkbox из общего списка
    checkButton.addEventListener("change", count);
}
for(const input of allInp){
    input.addEventListener("input", change)
}
// event - объект, передаваемый автоматически в функцию обработчика событий
//event.target - элемент, вызвавший событие
//event.target.value - значения инпута
function change(event){
    // Проверка введённого значения
    const value = event.target.value;
    // Проверяем условия для замены значения на 0
    if (value === "" || parseInt(value) < 0 || value.match(/^0\d+/) || value.includes(".")) {
        event.target.value = 0; // Замена значения на 0
    }
    else{
        const index = Array.from(allInp).indexOf(event.target); // Получаем индекс текущего input
        const checkBoxes = document.querySelectorAll('.menu_drinks input[type="checkbox"]');
        // Устанавливаем чекбокс на основе значения в инпуте
        if (parseInt(event.target.value) > 0) {
            checkBoxes[index].checked = true; // Устанавливаем чекбокс
        } else {
            checkBoxes[index].checked = false; // Снимаем отметку, если 0 или меньше
        }
    }
    count();
}
// value.match(/^0\d+/) проверка на формат 01 через регулярное выражение 

function count() {
    let summa = 0;
    // Обработка напитков
    const drinkCheckBoxes = document.querySelectorAll('.menu_drinks input[type="checkbox"]');
    const drinkInputs = document.querySelectorAll('.inputs_drinks input[type="number"]');
    drinkCheckBoxes.forEach((checkBox, index) => {
        if (checkBox.checked) {
            // Проверяем и устанавливаем количество
            if (drinkInputs[index].value === "" || parseInt(drinkInputs[index].value) === 0) {
                drinkInputs[index].value = 1;
            }
            const quantity = parseInt(drinkInputs[index].value) || 0; // Получаем количество из соответствующего input
            summa += parseInt(checkBox.value) * quantity; // Умножаем на цену
        }
        else{
            if (parseInt(drinkInputs[index].value) !== 0) {
                drinkInputs[index].value = 0;
            }
        }
    });
    // Обработка десертов
    const dessertCheckBoxes = document.querySelectorAll('.menu_desserts input[type="checkbox"]');
    const dessertInputs = document.querySelectorAll('.inputs_dessert input[type="number"]'); // Убедитесь, что класс задан правильно
    dessertCheckBoxes.forEach((checkBox, index) => {
        if (checkBox.checked) {
            // Проверяем и устанавливаем количество
            if (dessertInputs[index].value === "" || parseInt(dessertInputs[index].value) === 0) {
                dessertInputs[index].value = 1;
            }
            const quantity = parseInt(dessertInputs[index].value) || 0; // Получаем количество
            summa += parseInt(checkBox.value) * quantity; // Умножаем на цену
        }
        else{
            if (dessertInputs[index].value !== "") {
                dessertInputs[index].value = 0;
            }
        }
    });
    // Обновляем отображение суммы
    resSum.textContent = summa + "p";
}

//trim() убирает пробелы в начале и конце строки, что не дает пользователю ввести только пробелы
btn.addEventListener("click", function () {
    if (inputName.value.trim() === "" || inputSur.value.trim() === "") {
        alert(`Введите Ваше имя и фамилию!`);
    } else {
        alert(`Заказчик: ${inputName.value} ${inputSur.value}\nИтого: ${resSum.textContent}`);
    }
});
