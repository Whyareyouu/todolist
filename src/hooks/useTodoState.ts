import React from 'react';
import {TodoListStateContext} from "../context/context";

function useTodoState() {
    const context = React.useContext(TodoListStateContext);
    if (context === undefined) {
        throw new Error('useTodoState must be used within a TodoListStateContext');
    }
    return context;
}

export default useTodoState ;