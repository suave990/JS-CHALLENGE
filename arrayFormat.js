let array = [
    "Patrick wyne, 30",
    "lil wyne, 32",
    "Eric mimi, 21",
    "Dodos deck, 21",
    "Alian Dwine, 22",
    "Patrick wyne, 33",
    "Patrick wyne, 100",
    "Patrick wyne, 40"
]

function toObject(arr = []) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let [names, age] = arr[i].split(', ')
        let [fname, lname] = names.split(' ')


        obj[fname] = {
            secondName: lname,
            age: age
        }
    }
    console.log(obj)
}

toObject(array)