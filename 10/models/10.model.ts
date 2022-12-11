export class Location {
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    x: number; // sideways
    y: number;
}

export class Move {
    constructor(instruction: string) {
        let split = instruction.split(' ');
        const directionString = split[0];
        if(directionString === 'U'){
            this.direction = new Location(0, 1);
        } else if(directionString === 'D'){
            this.direction = new Location(0, -1);
        } else if(directionString === 'L'){
            this.direction = new Location(-1, 0);
        } else if (directionString === 'R'){
            this.direction = new Location(1, 0);
        }
        this.times = Number.parseInt(split[1]);
    }
    direction: Location;
    times: number;
}