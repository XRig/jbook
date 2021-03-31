
export type CellType = 'code' | 'text'
export type MoveDirectionType = 'up' | 'down'

export interface Cell {
    id:string;
    type: CellType;
    content: string;
}