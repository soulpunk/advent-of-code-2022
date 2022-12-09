export class Tree {
    constructor(height: string, rowIndex: number, columnIndex: number){
        this.height = Number.parseInt(height);
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
    }
    height: number;

    columnIndex: number;
    rowIndex: number;
    visibleUp: boolean = false;
    visibleDown: boolean = false;
    visibleLeft: boolean = false;
    visibleRight: boolean = false;

    isVisible(forest: Tree[][]): boolean {
        this.visibleUp =
            this.rowIndex === 0 ||
            this.isVisiblePastUpTree(forest);
        this.visibleDown =
            this.rowIndex === forest.length - 1 ||
            this.isVisiblePastDownTree(forest);
        this.visibleLeft =
            this.columnIndex === 0 ||
            this.isVisiblePastLeftTree(forest);
        this.visibleRight =
            this.columnIndex === forest[0].length - 1 ||
            this.isVisiblePastRightTree(forest);
        return this.visibleUp || this.visibleDown || this.visibleLeft || this.visibleRight;
    }

    isVisiblePastDownTree(forest: Tree[][]): boolean {
        let visible = true;
        for(let i = this.rowIndex + 1; i < forest.length; i++){
            let treeToCompare = forest[i][this.columnIndex];
            visible = visible && this.height > treeToCompare.height;
        }
        return visible;
    }

    isVisiblePastUpTree(forest: Tree[][]): boolean {
        let visible = true;
        for(let i = this.rowIndex - 1; i >= 0; i--){
            let treeToCompare = forest[i][this.columnIndex];
            visible = visible && this.height > treeToCompare.height;
        }
        return visible;
    }

    isVisiblePastLeftTree(forest: Tree[][]): boolean {
        let visible = true;
        for(let j = this.columnIndex - 1; j >= 0; j--){
            let treeToCompare = forest[this.rowIndex][j];
            visible = visible && this.height > treeToCompare.height;
        }
        return visible;
    }

    isVisiblePastRightTree(forest: Tree[][]): boolean {
        let visible = true;
        for(let j = this.columnIndex + 1; j < forest[0].length; j++){
            let treeToCompare = forest[this.rowIndex][j];
            visible = visible && this.height > treeToCompare.height;
        }
        return visible;
    }
}
