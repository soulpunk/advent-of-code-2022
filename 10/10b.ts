let fs = require('fs');
const instructionsByLine: string[] = fs.readFileSync('./10.txt').toString().split('\r\n');

let x = 1;

const cycles: number[] = [];
cycles.push(x);
instructionsByLine.forEach((instruction: string) => {
    if(instruction.includes('noop')){
        cycles.push(x);
    } else {
        cycles.push(x);
        const amount: number = Number.parseInt(instruction.split(' ')[1]);
        x = x + amount;
        cycles.push(x);
    }
});
let drawing = '';
cycles.forEach((cycle, index) => {
    if(index % 40 === cycle || index % 40 === cycle + 1 || index % 40 === cycle - 1){
        drawing += '#';
    } else {
        drawing += '.';
    }
})

console.log(drawing.substring(0,40));
console.log(drawing.substring(40,80));
console.log(drawing.substring(80,120));
console.log(drawing.substring(120,160));
console.log(drawing.substring(160,200));
console.log(drawing.substring(200,240));