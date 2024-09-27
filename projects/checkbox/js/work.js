btn = document.querySelector(".button") //получаем элемент с классом btn
resSum = document.querySelector(".summa") 
allCheckButtons = document.querySelectorAll('[name="goods"]')// получаем все checkbox, у которых параметр name задан goods

btn.addEventListener("click", function(){ //обработка нажатия кнопки рассчета
    let summa = 0
    for (const checkButton of allCheckButtons){ //перебор всех checkbox из общего списка
        if (checkButton.checked){ //проверка, что нажата
            summa += Number(checkButton.value) // добавляем к сумме значение, еслим нажата
        }
    }
    resSum.textContent = summa.toString() + "p"
})