/*Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

Для добавления стилей, используй CSS - классы valid и invalid.
*/


const inputVal = document.querySelector("#validation-input");
const totalLength = Number(inputVal.getAttribute("data-length"));

/*
const onInput = () => {
  if (inputVal.value.length === totalLength) {
    inputVal.classList.add("valid");
    inputVal.classList.remove("invalid");
  } else {
    inputVal.classList.add("invalid");
    inputVal.classList.remove("valid");
  }
};
*/

function validator(isValid) {
  return isValid ? { validAdd: 'valid', validRemove: 'invalid' }:{ validAdd: 'invalid', validRemove: 'valid' }
}

const onInput = () => {
  const action = validator(inputVal.value.length >= totalLength);
    inputVal.classList.add(action.validAdd);
    inputVal.classList.remove(action.validRemove);
};

inputVal.addEventListener("blur", onInput);