export class TreeHouse {
    constructor(height: string, rowIndex: number, columnIndex: number){
        this.height = Number.parseInt(height);
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
    }
    height: number;

    columnIndex: number;
    rowIndex: number;
    visibleUp: number = 0;
    visibleDown: number = 0;
    visibleLeft: number = 0;
    visibleRight: number = 0;

    visible(forest: TreeHouse[][]): number {
        this.visibleUp =
            this.visiblePastUpTree(forest);
        this.visibleDown =
            this.visiblePastDownTree(forest);
        this.visibleLeft =
            this.visiblePastLeftTree(forest);
        this.visibleRight =
            this.visiblePastRightTree(forest);
        return this.visibleUp * this.visibleDown * this.visibleLeft * this.visibleRight;
    }

    visiblePastDownTree(forest: TreeHouse[][]): number {
        let visible = 0;
        let canSee = true;
        let checking = this.rowIndex + 1;
        while(canSee && checking < forest.length){
            visible++;
            checking++;
            canSee = this.height > forest[checking][this.columnIndex].height;
        }
        return visible;
    }

    visiblePastUpTree(forest: TreeHouse[][]): number {
        let visible = 0;
        let canSee = true;
        let checking = this.rowIndex - 1;
        while(canSee && checking >= 0){
            visible++;
            checking--;
            canSee = this.height > forest[checking][this.columnIndex].height;
        }
        return visible;
    }

    visiblePastLeftTree(forest: TreeHouse[][]): number {
        let visible = 0;
        let canSee = true;
        let checking = this.columnIndex - 1;
        while(canSee && checking >= 0){
            visible++;
            checking--;
            canSee = this.height > forest[this.rowIndex][checking].height;
        }
        return visible;
    }

    visiblePastRightTree(forest: TreeHouse[][]): number {
        let visible = 0;
        let canSee = true;
        let checking = this.columnIndex + 1;
        while(canSee && checking < forest[0].length){
            visible++;
            checking++;
            canSee = this.height > forest[this.rowIndex][checking].height;
        }
        return visible;
    }
}
