import { ActionType } from '../action-types'
import { CellType, MoveDirectionType } from '../cell'


export interface MoveCellAction {
    type: ActionType.MOVE_CELL;
    payload: {
        id: string;
        direction: MoveDirectionType
    }
}
export interface DeleteCellAction {
    type: ActionType.DELETE_CELL;
    payload: string
}
export interface InsertCellBeforAction {
    type: ActionType.INSERT_CELL_BEFORE;
    payload: {
        id: string | null;
        type: CellType
    }
}
export interface UpdateCellAction {
    type: ActionType.UPDATE_CELL;
    payload: {
        id: string;
        content: string;
    }
}

export type Action =
    | MoveCellAction
    | DeleteCellAction
    | InsertCellBeforAction
    | UpdateCellAction
