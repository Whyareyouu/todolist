import React from 'react';
import {reducer} from "./reducer/reducer";


export const TodoListStateContext = React.createContext<undefined>(
    undefined
);
export const TodoListDispatchContext = React.createContext(undefined)

type FormProviderProps = {
    children: React.ReactNode;
};

const initialState = {
    todoList: []
}

function TodoListProvider({ children }: FormProviderProps): JSX.Element {
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