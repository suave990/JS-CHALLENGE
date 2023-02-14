let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

for (let a = 0; a < array.length / 2; a++) {
    [array[a], array[array.length - a - 1]] = [array[array.length - a - 1], array[a]]
}

console.log(array)