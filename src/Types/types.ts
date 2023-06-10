import {ActionPoints} from "../context/reducer/enums";
import {ITodo} from "../context/reducer/Todo.interface";

export type TActions =
    { type: ActionPoints.ADD; payload: ITodo } |
    {type: ActionPoints.COMPLETE; payload: number} |
    {type: ActionPoints.CLEARCOMPLETED}
