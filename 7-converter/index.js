const sum = 1000;

function currencyConverter(sum, currencyOfFunds, targetCurrency) {
    const currencyRate = 100
    if (currencyOfFunds === 'rub' && targetCurrency === 'usd') {
        return sum * currencyRate
    } else if (currencyOfFunds === 'usd' && targetCurrency === 'rub') {
        return sum / currencyRate
    }
    return null
}

console.log(currencyConverter(sum, 'usd', 'rub'))
console.log(currencyConverter(sum, 'usd', 'eur'))
