function sumOfList3(list) {
    let sum = 0;
for (let i = 0; i < list.length; i++) {
    sum += list[i];
}
return sum;
}
let list1 = [3,6,7,9,5];
let list2 = [3,5,7,8,6,6,7];
let list3 = list1.concat(list2);
list3.sort((a, b) => a - b)
console.log(sumOfList3(list3));
console.log(sumOfList3(list1))