import React from 'react';
import {reducer} from "./reducer/reducer";
import {ITodos} from "./reducer/Todo.interface";
import {TActions} from "../Types/types";


export const TodoListStateContext = React.createContext<ITodos | undefined>(undefined);
export const TodoListDispatchContext = React.createContext<React.Dispatch<TActions> | undefined>(undefined)

type TodoListProviderProps = {
    children: React.ReactNode;
};

const initialState: ITodos = {
    todos: []
}

function TodoListProvider({children}: TodoListProviderProps): React.JSX.Element {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <TodoListStateContext.Provider value={state}>
            <TodoListDispatchContext.Provider value={dispatch}>
                {children}
            </TodoListDispatchContext.Provider>
        </TodoListStateContext.Provider>
    );
}

export default TodoListProvider;