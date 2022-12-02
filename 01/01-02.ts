var fs = require('fs');
var text = fs.readFileSync('./input.txt').toString();
var textByLine = text.split('\r\n');
let elfCount = 0;
let elfList = [[]];
textByLine.forEach((line) => {
    if(line !== '') {
        elfList[elfCount].push(+line);
    } else {
        elfList[++elfCount] = [];
    }
});
let calorieList = [];
elfList.forEach((elf)=> {
    let calorieCount = 0;
    elf.forEach((calorie) => {
        calorieCount += calorie;
    });
    calorieList.push(calorieCount);
});

calorieList.sort((a, b) => b - a);

console.log(calorieList[0] + calorieList[1] + calorieList[2]);