var fs = require('fs');
var text = fs.readFileSync('./04-01-input.txt').toString();
var inputByLine = text.split('\r\n');

let count = 0;
inputByLine.forEach((line) => {
    const commaIndex = line.indexOf(',');

    const firstHalf = line.substring(0, commaIndex);
    const firstStart = Number.parseInt(firstHalf.substring(0, firstHalf.indexOf('-')));
    const firstEnd = Number.parseInt(firstHalf.substring(firstHalf.indexOf('-')+1));

    const secondHalf = line.substring(commaIndex+1);
    const secondStart = Number.parseInt(secondHalf.substring(0, secondHalf.indexOf('-')));
    const secondEnd = Number.parseInt(secondHalf.substring(secondHalf.indexOf('-')+1));

    if(
        (firstStart <= secondStart && firstEnd >= secondEnd) ||
        (secondStart <= firstStart && secondEnd >= firstEnd) ||
        (firstStart <= secondStart && firstEnd >= secondStart) ||
        (secondStart <= firstStart && secondEnd >= firstStart)
    ){
        count++;
    }
});
console.log(count);