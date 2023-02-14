let array = []

array = [1, 2, 3, 2, 4, 6, 4, 5, 2, 2, 1, 4, 6, 7, 4, 6, 7, 5, 3, 2]

let output = []

for (let a= 0; a< arr.length; a++) {
    let divisible = false
    for (let b = 2; j < (arr[a] / 2) + 1; b++) {
        if (arr[a] % b == 0) {
            divisible = true
        }
    }
    if (!divisible) {
        output.push(arr[a])
    }
}

console.log('Prime numbers:', output)