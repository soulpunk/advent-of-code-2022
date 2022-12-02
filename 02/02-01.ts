import {roshambo, RPS} from "./models/02-01-model";

var fs = require('fs');
var text = fs.readFileSync('02-01-input.txt').toString();
var inputByLine = text.split('\r\n');
let moves = [];

const getRoundScore = (move: roshambo) => {
    let score = 0;
    if(move.myMove === move.theirMove){
        score = 3;
    } else if (
        (move.myMove === RPS.paper && move.theirMove === RPS.rock) ||
        (move.myMove === RPS.rock && move.theirMove === RPS.scissors) ||
        (move.myMove === RPS.scissors && move.theirMove === RPS.paper)
    ){
        score = 6;
    }
    return score;
}
// a = rock, b = paper, c = scissors
// x = rock, y = paper, z = scissors
inputByLine.forEach((line) => {
    moves.push(new roshambo(line));
});
let totalScore = 0;
moves.forEach((move: roshambo) => {
    totalScore += move.myMove + getRoundScore(move);
});

console.log(totalScore);