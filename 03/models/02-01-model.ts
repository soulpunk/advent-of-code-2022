export enum RPS {
    rock= 1,
    paper= 2,
    scissors = 3
}

export class roshambo {
    theirMove: RPS;
    myMove: RPS;
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
            this.myMove = RPS.rock;
        } else if (inputArray[1] === 'Y'){
            this.myMove = RPS.paper;
        } else if (inputArray[1] === 'Z'){
            this.myMove = RPS.scissors;
        }
    }
}