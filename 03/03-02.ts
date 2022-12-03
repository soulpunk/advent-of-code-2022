var fs = require('fs');
var text = fs.readFileSync('./03-01-input.txt').toString();
var inputByLine = text.split('\r\n');

const convertLetterToNumber = (extraLetter) => {
    const letterArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let index = letterArray.indexOf(extraLetter) + 1;
    if(index === 0) {
        index = letterArray.indexOf(extraLetter.toLowerCase()) + 27;
    }
    return index;
}

let sum = 0;
for(let i = 0; i < Math.ceil(inputByLine.length / 3);  i++){
    const currentGroup = i*3;
    const firstLine = inputByLine[currentGroup];
    const secondLine = inputByLine[currentGroup+1];
    const thirdLine = inputByLine[currentGroup+2];
    let badge = '';
    firstLine.split('').forEach((letter) => {
        if(secondLine.includes(letter) && thirdLine.includes(letter)){
            badge = letter;
        }
    });
    sum += convertLetterToNumber(badge);
}

console.log(sum);