let arr = [1, 7, 2, 3, 2, 4, 6, 4, 5, 2, 2, 1, 4, 6, 7, 4, 6, 7, 5, 3, 2]

for (let a = 0; a < arr.length; a++) {
    let small = a
    for (let b = a; b < arr.length; b++) {
        if (arr[b] < arr[small]) {
            small = b
        }
    }
    [arr[a], arr[small]] = [arr[small], arr[a]]
}

console.log(arr)