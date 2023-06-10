import { ActionPoints } from "../enums/Actions.enum";
import { ITodo } from "../context/reducer/Todo.interface";

export type TActions =
	| { type: ActionPoints.ADD; payload: ITodo }
	| { type: ActionPoints.COMPLETE; payload: number }
	| { type: ActionPoints.CLEARCOMPLETED };
