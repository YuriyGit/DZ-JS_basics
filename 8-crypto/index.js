const password = 'Сhingachgook'

function crypto(password) {
    const parsePassword = password.split('')
    const reversePassword = parsePassword.reverse()
    const newPassword = reversePassword.join('')
    console.log(newPassword)
    return newPassword
}

function check(cryptoPassword, originalPassword) {
    const parsePassword = cryptoPassword.split('')
    const password = parsePassword.reverse().join('')
    if (password === originalPassword) {
        console.log(password)
        console.log(true)
        return true
    }
    console.log(false)
    return false
}

crypto(password)
check(crypto(password), password)