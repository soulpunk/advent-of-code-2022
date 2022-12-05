let fs = require('fs');
let text = fs.readFileSync('./05-01-input.txt').toString();
let firstAndSecondHalf = text.split('\r\n\r\n');
let firstByLines = firstAndSecondHalf[0].split('\r\n');
let finalFirst = firstByLines[firstByLines.length-1];
finalFirst = finalFirst.replaceAll(' ','');
let numberOfCrates = Number.parseInt(finalFirst.substring(finalFirst.length-1));
const backwardsCrates = [];
for(let i = 0; i < numberOfCrates; i++){
    backwardsCrates.push([]);
}
firstByLines.forEach((line, index) => {
    if(index + 1 != firstByLines.length) {
        for (let i = 0; i < numberOfCrates; i++) {
            const box = line.substring(i*4+1, i*4+2);
            if(box !== ' ') {
                backwardsCrates[i].push(box);
            }
        }
    }
});

const crates = [];
backwardsCrates.forEach((crate) => {
    crates.push(crate.reverse());
});
console.log(crates);


let secondHalfByLine = firstAndSecondHalf[1].split('\r\n');
let count = 0;
secondHalfByLine.forEach((line) => {
    const instructions = line.split(' ');
    const numberToMove = Number.parseInt(instructions[1]);
    const moveFrom = Number.parseInt(instructions[3]) - 1;
    const moveTo = Number.parseInt(instructions[5]) - 1;

    for(let i = 0; i < numberToMove; i++){
        crates[moveTo].push(crates[moveFrom].pop());
    }
});

crates.forEach((crate) => {
    console.log(crate[crate.length-1]);
})