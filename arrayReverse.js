let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

let rev = []

for (let a = 0; a < array.length; a++) {
    rev = [array[a], ...rev]
}

console.log(rev)
