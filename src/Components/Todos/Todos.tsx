import React from 'react';
import {ITodos} from "../../context/reducer/Todo.interface";
import Todo from "../Todo/Todo";
import {TodosWrapper} from "./Todos.styles";

type TodosProps = {
    onToggle: (id: number) => void
}
const Todos = ({todos, onToggle}:ITodos & TodosProps):React.JSX.Element => {

    if(todos.length === 0) {
        return <div>У вас пока нет запланированных задач</div>
    }
    return (
        <TodosWrapper>
            {todos.map(todo => <Todo text={todo.text} key={todo.id} completed={todo.completed} onToggle={onToggle} id={todo.id} />)}
        </TodosWrapper>
    );
};

export default Todos;
