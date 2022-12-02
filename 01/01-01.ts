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
let greatestCalories = 0;
let greatestIndex = 0;
elfList.forEach((elf, index)=> {
    let calorieCount = 0;
    elf.forEach((calorie) => {
        calorieCount += calorie;
    });
    if(calorieCount > greatestCalories){
        greatestCalories = calorieCount;
        greatestIndex = index;
    }
});

console.log(greatestIndex, greatestCalories);