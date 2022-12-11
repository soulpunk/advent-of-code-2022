export class Monkey {
    constructor(monkeyBlock: string){
        const byLine = monkeyBlock.split('\r\n');
        const stringArray = byLine[1].replace('Starting items: ', '').split(', ');
        stringArray.forEach((singleString) => {
            this.stuff.push(Number.parseInt(singleString));
        });

        const stringFn = byLine[2].replace('Operation: new = ', '');
        this.look = new Function('old', `return ${stringFn};`);
        const testValue = byLine[3].split('Test: divisible by ')[1];
        const trueReturn = byLine[4].split('If true: throw to monkey ')[1];
        const falseReturn = byLine[5].split('If false: throw to monkey ')[1];
        this.whereToThrow = new Function('value', `if(value % ${testValue} === 0) { return ${trueReturn}} else { return ${falseReturn}}`);
    }
    stuff: number[] = [];
    look: Function;
    whereToThrow: Function;
    timesInspected: number = 0;
}
