import React from 'react';
import {TodoListDispatchContext} from "../context/context";

function useTodoDispatch() {
    const context = React.useContext(TodoListDispatchContext);
    if (context === undefined) {
        throw new Error(
            'useTodoDispatch must be used within a TodoListDispatchContext'
        );
    }
    return context;
}

export default useTodoDispatch;