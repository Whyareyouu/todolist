import React from 'react';
import {TodoCheckbox, TodoText, TodoWrapper} from "./Todo.style";


type TodoProps = {
    text: string;
    completed: boolean;
    onToggle: () => void
}

const Todo = ({ text, completed, onToggle}: TodoProps): React.JSX.Element => {
    return (
        <TodoWrapper>
            <TodoCheckbox
                type="checkbox"
                checked={completed}
                onChange={onToggle}
            />
            <TodoText completed={completed}>{text}</TodoText>
        </TodoWrapper>
    );
};

export default Todo;