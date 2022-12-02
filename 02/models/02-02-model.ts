export enum RPS {
    rock= 1,
    paper= 2,
    scissors = 3
}

export enum Result {
    draw = 3,
    win = 6,
    lose = 0
}

export class roshambo {
    theirMove: RPS;
    myMove: RPS;
    result: Result;
    getScore = () => {
        return this.result + this.myMove;
    }
    constructor(input: string) {
        const inputArray = input.split(' ');
        if(inputArray[0] === 'A'){
            this.theirMove = RPS.rock;
        } else if (inputArray[0] === 'B'){
            this.theirMove = RPS.paper;
        } else if (inputArray[0] === 'C'){
            this.theirMove = RPS.scissors;
        }

        if(inputArray[1] === 'X'){
            this.result = Result.lose;
            this.myMove = this.getLosingMove(this.theirMove);
        } else if (inputArray[1] === 'Y'){
            this.result = Result.draw;
            this.myMove = this.theirMove;
        } else if (inputArray[1] === 'Z'){
            this.result = Result.win;
            this.myMove = this.getWinningMove(this.theirMove);
        }
    }

    getWinningMove(move: RPS): RPS{
        let winningMove = RPS.rock;
        if(move === RPS.rock){
            winningMove = RPS.paper;
        } else if(move === RPS.paper){
            winningMove = RPS.scissors;
        }
        return winningMove;
    }

    getLosingMove(move: RPS): RPS{
        let losingMove = RPS.paper;
        if(move === RPS.rock){
            losingMove = RPS.scissors;
        } else if(move === RPS.paper){
            losingMove = RPS.rock;
        }
        return losingMove;
    }

}