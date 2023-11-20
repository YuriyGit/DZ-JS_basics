/*
Дан массив строк [`10-02-2022`, `тест`, `11/12/2023`, `00/13/2022`, `41/12/2023`]
Необходимо написать функцию, которая бы удаляла бы из массива все строки,
которые нельзя перевести в дату (можно:10-02-2022 11/12/2023)
и возвращала бы новый массив вида:
- [`10-02-2022`, `12-11-2023`]
 */

const dateArray = [`10-02-2022`, `тест`, `11/12/2023`, `00/13/2022`, `41/12/2023`]

const getFormattedDatesArray = (dateArr) => {
    const dateArrayPars = []
    dateArr.forEach((date) => {

        if (date.split('-').length === 3) {
            dateArrayPars.push(date.split('-'))
        }
        if (date.split('/').length === 3) {
            let dateFormatting = [];
            const [month, day, year] = date.split('/');
            dateFormatting.push(day, month, year);

            dateArrayPars.push(dateFormatting)
        }
    })
    // console.log(dateArrayPars);
    return dateArrayPars
}

function getDatesArray(dateArr) {
    let newArr = []

    getFormattedDatesArray(dateArr).map(item => {
        const [day, month] = item
        let numberDay = Number(day)
        let numberMonth = Number(month)
        if (0 < numberDay && numberDay <= 31 && 0 < numberMonth && numberMonth <= 12) {
            newArr.push(item.join('-'))
        }
    })
    return newArr
}

console.log(getDatesArray(dateArray));