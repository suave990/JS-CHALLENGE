let arr = []

arr = [1, 2, 3, 2, 4, 6, 4, 5, 2, 2, 1, 4, 6, 7, 4, 6, 7, 5, 3, 2]

let output = []

for (let i = 0; i < arr.length; i++) {
    let divisible = false
    for (let j = 2; j < (arr[i] / 2) + 1; j++) {
        if (arr[i] % j == 0) {
            divisible = true
        }
    }
    if (!divisible) {
        output.push(arr[i])
    }
}

console.log('Prime numbers:', output)