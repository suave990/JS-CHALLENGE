let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

for (let i = 0; i < array.length / 2; i++) {
    [array[i], array[array.length - i - 1]] = [array[array.length - i - 1], array[i]]
}

console.log(array)