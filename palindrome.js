function reverse(str = '') {
    let out = ''

    for (let a = 0; a < str.length; a++) {
        out = str[a] + out
    }

    return out
}

function palindrome(str = '') {
    let inverseNum = reverse(str)
    return inverseNum == str
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('\nCheck parindrome: ', str => {
    console.log('')
    console.log(palindrome(str), ',' + str + ' is ' + (palindrome(str) ? '' : 'not ') + 'a parindrome')
    console.log('')
    readline.close()
})