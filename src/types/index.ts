export enum CellValue {
    bomb,
    none,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight
}

export enum CellState {
    visible,
    flagged,
    unvisible
}

export type Cell = {value: CellValue, state: CellState}