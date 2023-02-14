let array= [1, 7, 2, 3, 2, 4, 6, 4, 5, 2, 2, 1, 4, 6, 7, 4, 6, 7, 5, 3, 2]

for (let a = 0; a < array.length; a++) {
    let small = a
    for (let b = a; b < array.length; b++) {
        if (array[b] < array[small]) {
            small = b
        }
    }
    [array[a], array[small]] = [array[small], array[a]]
}

console.log(array)