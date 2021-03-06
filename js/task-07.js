/*Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и 
изменяет инлайн - стиль span#text обновляя свойство font - size.
В результате при перетаскивании ползунка будет меняться размер текста.*/

const inputFont = document.getElementById("font-size-control");

const spanText = document.getElementById("text");

inputFont.oninput = function () {
    spanText.style.fontSize = inputFont.value + "px";
};