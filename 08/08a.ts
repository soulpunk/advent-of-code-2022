import {Tree} from "./models/08.model";

let fs = require('fs');
let textByLine: any[] = fs.readFileSync('./08.txt').toString().split('\r\n');

const forest: Tree[][] = [];
textByLine.forEach((line: string, rowIndex) => {
    const row: Tree[] = [];
    let heights = line.split('');
    heights.forEach((heightString, columnIndex) => {
        row.push(new Tree(heightString, rowIndex, columnIndex));
    });
    forest.push(row);
});
let numberVisible = 0;
forest.forEach((row) => {
    row.forEach((tree) => {
        if(tree.isVisible(forest)){
            numberVisible++;
        }
    });
});

console.log(numberVisible);