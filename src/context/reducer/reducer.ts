import { ActionPoints } from "../../enums/Actions.enum";
import { ITodos } from "./Todo.interface";
import { TActions } from "../../Types/types";

export const reducer = (state: ITodos, action: TActions) => {
	switch (action?.type) {
		case ActionPoints.ADD:
			return { ...state, todos: [...state.todos, action.payload] };
		case ActionPoints.COMPLETE:
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo._id === action.payload) {
						return { ...todo, completed: !todo.completed };
					}
					return todo;
				}),
			};
		case ActionPoints.CLEARCOMPLETED:
			return {
				...state,
				todos: state.todos.filter((todo) => !todo.completed),
			};
		default:
			return state;
	}
};
