import {roshambo} from "./models/02-02-model";

var fs = require('fs');
var text = fs.readFileSync('02-01-input.txt').toString();
var inputByLine = text.split('\r\n');
let moves = [];

let totalScore = 0;
inputByLine.forEach((line) => {
    const currentRound = new roshambo(line);
    moves.push(currentRound);
    totalScore += currentRound.getScore();
});

console.log(totalScore);