/*
 Написать функцию проверки номера корты алгоритмом Луна. В функцию передаётся карта: 4561-2612-1234-5464,
 а функция возвращает true, если карта проходит алгоритм и false, если нет.
 */

const card = '4561-2612-1234-5464';

function luna(cardNumber) {
    const number = cardNumber.replaceAll('-', '');
    const arr = [];
    if (isNaN(Number(number)))
        return false;

    for (let i = 0; i < number.length; i++) {

        if (i % 2 === 0) {

            if (number[i] * 2 > 9) {
                arr.push(number[i] * 2 - 9);
            } else {
                arr.push(number[i] * 2);
            }

        } else {
            arr.push(number[i]);
        }
    }
    const result =  arr.reduce((acc, num) => {
        return acc + Number(num)
    }, 0)
    return result % 2 === 0

}

console.log(luna('card'));
