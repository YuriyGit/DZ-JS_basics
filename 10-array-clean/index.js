/*
Напишите функцию, которая принимает:
-Массив чисел
-Функцию удаления элементов
И возвращает отфильтрованный массив. При этом функция удаления элементов принимает
число и возвращает true, если его надо удалить и false, если надо оставить
*/
const numberArray = [1, 3, 4, 2, -5, 8, 7, 89]

let sortArr = (num) => {
    return num < 4;
}

function getFilteredArray(arr, fn) {
    const filteredArr = []
    for (const item of arr) {
        if (fn(item) === false) {
            filteredArr.push(item)
        }
    }
    return filteredArr
}

console.log(getFilteredArray(numberArray, sortArr));
getFilteredArray(numberArray, sortArr);
