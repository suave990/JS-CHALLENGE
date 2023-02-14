function reverse(str = '') {
    let out = ''

    for (let i = 0; i < str.length; i++) {
        out = str[i] + out
    }

    return out
}

function palindrome(str = '') {
    let inverse = reverse(str)
    return inverse == str
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