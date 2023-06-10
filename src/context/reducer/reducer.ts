import {ActionPoints} from "./enums";
import {ITodos} from "./Todo.interface";
import {TActions} from "../../Types/types";


export const reducer = (state:ITodos, action: TActions) => {
    switch (action?.type) {
        case ActionPoints.ADD:
            return {...state, todos: [...state.todos, action.payload]}
        case ActionPoints.COMPLETE:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed };
                    }
                    return todo;
                }),
            };
        case ActionPoints.CLEARCOMPLETED:
            state.todos.filter(todo => !todo.completed)
            return state
        default:
            return state;
    }
};