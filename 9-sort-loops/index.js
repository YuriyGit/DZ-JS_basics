/*
Дан массив чисел const arr = [1, 40, -5, 10, 0];
Написать функцию, которая сортирует данный массив при помощи циклов.

подсказка:
- нужно использовать 2 цикла, вложенных друг в друга,
- нужно сравнивать и менять элементы
*/

const arr = [1, 40, -5, 10, 0];

function getSortedArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                const x = arr[j]
                arr[j] = arr[i]
                arr[i] = x
            }
        }
    }
    return arr;
}

console.log(getSortedArray(arr));
