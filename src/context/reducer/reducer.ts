import {ActionPoints} from "./enums";
import {ITodos} from "./Todo.interface";
import {TActions} from "../../Types/types";


export const reducer = (state:ITodos, action: TActions) => {
    switch (action?.type) {
        case ActionPoints.ADD:
            return {...state, todos: [...state.todos, action.payload]}
        case ActionPoints.COMPLETE:
            state.todos.map(todo => todo.id === action.payload ? ((todo.completed = true), {...todo}) : todo)
            return state
        case ActionPoints.CLEARCOMPLETED:
            state.todos.filter(todo => !todo.completed)
            return state
        default:
            return state;
    }
};