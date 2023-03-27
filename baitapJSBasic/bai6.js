function checkArr(arr) {
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        if (newarr.indexOf(arr[i]) === -1) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
console.log(checkArr([1,2,3,4,5,6,7,7]));

