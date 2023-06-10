import React from 'react';
import {ITodos} from "../../context/reducer/Todo.interface";
import Todo from "../Todo/Todo";
import {TodosWrapepr} from "./Todos.styles";

const Todos = ({todos}:ITodos):React.JSX.Element => {
    const onToggle = () => {
        console.log("123")
    }
    return (
        <TodosWrapepr>
            {todos.map(todo => <Todo text={todo.text} key={todo.id} completed={todo.completed} onToggle={onToggle} />)}
        </TodosWrapepr>
    );
};

export default Todos;
