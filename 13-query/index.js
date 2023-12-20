const objQuery = {
    search: 'Вася',
    take: 10,
}

function getStrQuery(objectQuery) {
    const arr = [];
    for (let key in objectQuery) {
        const value = objectQuery[key]
        const str = `${key}=${value}`;
        arr.push(str)
    }
    return arr.join('&')
}

console.log(getStrQuery(objQuery)); //search=Вася&take=10