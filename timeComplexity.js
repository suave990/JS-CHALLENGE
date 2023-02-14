let array =[3,1,3,4,4] 

let counts = {}

function check() {
    for (let key in counts) {
        if (counts[key] > array.length / 2) {
            return [key, counts[key]];
        }
    }
    return false;
}

for (let a = 0; a < array.length; a++) {
    if (counts[array[a]] == undefined) {
        counts[array[a]] = 1
    }
    else {
        counts[array[a]] += 1
    }
}

if (check()) {
    console.log('array has majority on', check()[0], 'with', check()[1], 'counts')
}
else {
    console.log("array hasn't majority")
}