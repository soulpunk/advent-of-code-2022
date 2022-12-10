import {Location, Move} from "./models/09.model";

let fs = require('fs');
const instructionsByLine: string[] = fs.readFileSync('./09.txt').toString().split('\r\n');

let head = new Location(0, 0);
let tails: Location[] = [];
for(let i = 0; i < 9; i++) {
    tails.push(new Location(0, 0));
}
const moves: Move[] = [];
instructionsByLine.forEach((instruction: string) => {
    moves.push(new Move(instruction));
});

let touchedSquares = [];
touchedSquares.push(new Location(tails[8].x, tails[8].y));

let moveSnake = (head: Location, tail: Location) => {
    if((head.x === tail.x && head.y === tail.y) || (Math.abs(head.x - tail.x) < 2 && Math.abs(head.y - tail.y) < 2)){
        //we cool!
    } else if (head.x === tail.x){
        if(Math.abs(head.y - tail.y) === 1){
            tail.y = head.y;
        } else if(head.y > tail.y){
            tail.y += 1;
        } else {
            tail.y -= 1;
        }
    } else if(head.y === tail.y){
        if(Math.abs(head.x - tail.x) === 1){
            tail.x = head.x;
        } else if(head.x > tail.x){
            tail.x += 1;
        } else {
            tail.x -= 1;
        }
    } else if (Math.abs(head.x - tail.x) !== 1 || Math.abs(head.y - tail.y) !== 1){
        if(head.x > tail.x){
            tail.x += 1;
        } else {
            tail.x -= 1;
        }

        if(head.y > tail.y){
            tail.y += 1;
        } else {
            tail.y -= 1;
        }
    }
}

moves.forEach((move) => {
    for(let i = 0; i < move.times; i++) {
        head.x += move.direction.x;
        head.y += move.direction.y;
        tails.forEach((tail, index) => {
            if(index === 0) {
                moveSnake(head, tail);
            } else {
                moveSnake(tails[index-1], tail);
            }
        });
        const hasSquare = touchedSquares.find((location) => {
            return location.x === tails[8].x && location.y === tails[8].y
        });
        if(!hasSquare) {
            touchedSquares.push(new Location(tails[8].x, tails[8].y));
        }
    }
});

console.log(touchedSquares.length);