let array = [1,5,7,8,9,15];
array.map((element) => {
    if (element % 2 == 0) {
        console.log('so chan ' + element);
    }
})
array.map((element) => {
    if (element % 2 != 0) {
        console.log(`so le ${element}`);
    }
})
let newarray = array.filter((element) => {
    return element >= 5;
})
console.log(newarray)
let newarray1 = array.filter((element) => {
    return element % 5 == 0;
})
console.log(newarray1)
let newarray2 = []
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 5) {
       newarray2.push(array[i] + 1)
    }
}
console.log(newarray2);

let array3 = array.slice(3)
console.log(array3);