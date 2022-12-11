import {Monkey} from "./models/11.model";

let fs = require('fs');
const monkeyBlocks: string[] = fs.readFileSync('./11.txt').toString().split('\r\n\r\n');

const monkeys: Monkey[] = [];
monkeyBlocks.forEach((monkeyBlock: string) => {
    monkeys.push(new Monkey(monkeyBlock));
});

for(let i = 0; i < 20; i++) {
    console.log('=======');
    console.log('round' + (i+1));
    console.log('-------');
    monkeys.forEach((monkey) => {
        monkey.stuff.forEach((thing) => {
            const updatedThing = Math.floor(monkey.look(thing) / 3);
            monkey.timesInspected += 1;
            monkeys[monkey.whereToThrow(updatedThing)].stuff.push(updatedThing);
        });
        monkey.stuff = [];
    });

    //console.log(monkeys);
}

monkeys.forEach((monkey, index) => {
    console.log(`Monkey ${index + 1} inspected ${monkey.timesInspected} times`)
});

monkeys.sort((a,b) => (b.timesInspected - a.timesInspected));

console.log(monkeys[0].timesInspected * monkeys[1].timesInspected);