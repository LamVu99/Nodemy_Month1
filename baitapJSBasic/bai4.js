function checkSum() {
let sum = 0;
for (let i = 0; i < arr2.length; i++) {
   if (typeof(arr2[i]) == 'number') {
    sum += arr2[i];
   }
}
return sum;
}
let arr2 = ['4', '6', 1,2,3,5, 'y', 't', 5];
console.log(checkSum())
