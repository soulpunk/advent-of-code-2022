import {Monkey} from "./models/11.model";

let fs = require('fs');
const monkeyBlocks: string[] = fs.readFileSync('./11.txt').toString().split('\r\n\r\n');

const monkeys: Monkey[] = [];
monkeyBlocks.forEach((monkeyBlock: string) => {
    monkeys.push(new Monkey(monkeyBlock));
});

for(let i = 0; i < 10000; i++) {
    monkeys.forEach((monkey) => {
        monkey.stuff.forEach((thing) => {
            const updatedThing = monkey.look(thing);
            monkey.timesInspected += 1;
            monkeys[monkey.whereToThrow(updatedThing)].stuff.push(updatedThing % 9699690);
            //9699690
        });
        monkey.stuff = [];
    });
}

monkeys.forEach((monkey, index) => {
    console.log(`Monkey ${index + 1} inspected ${monkey.timesInspected} times`)
});

monkeys.sort((a,b) => (b.timesInspected - a.timesInspected));

console.log(monkeys[0].timesInspected * monkeys[1].timesInspected);