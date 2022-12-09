import {TreeHouse} from "./models/08b.model";

let fs = require('fs');
let textByLine: any[] = fs.readFileSync('./08.txt').toString().split('\r\n');

const forest: TreeHouse[][] = [];
textByLine.forEach((line: string, rowIndex) => {
    const row: TreeHouse[] = [];
    let heights = line.split('');
    heights.forEach((heightString, columnIndex) => {
        row.push(new TreeHouse(heightString, rowIndex, columnIndex));
    });
    forest.push(row);
});
let maxVisible = 0;
forest.forEach((row) => {
    row.forEach((tree) => {
        const numberVisible = tree.visible(forest);
        if(maxVisible < numberVisible){
            maxVisible = numberVisible;
        }
    });
});

console.log(maxVisible);