let data03 = ['Cam','Xoài','Mít','Bưởi','Quýt','Dưa gang'];
let data04 = new Array(...data03)
for (let i = 0; i < data03.length; i++) {
    if (data03[i] === 'Dưa gang') {
        data03.splice(i, 1, 'Dưa hấu')
    }
}
let data05 = data03.length / 2;
data03.splice(data05, 0, 'Mận')
data03.unshift('Dứa');
data03.push('Chanh');
console.log(data03);