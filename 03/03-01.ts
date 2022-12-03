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
inputByLine.forEach((line) => {
    const firstHalf = line.substring(0, line.length / 2);
    const secondHalf = line.substring(line.length / 2);
    let extra = '';
    firstHalf.split('').forEach((letter) => {
        if(secondHalf.includes(letter)){
            extra = letter;
        }
    });
    sum += convertLetterToNumber(extra);
});
console.log(sum);