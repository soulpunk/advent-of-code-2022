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

console.log(cycles[19] * 20 + cycles[59]*60 + cycles[99]*100+cycles[139]*140+cycles[179]*180+cycles[219]*220);