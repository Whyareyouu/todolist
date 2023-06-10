import React from 'react';
import Input from "./Components/Input/Input";
import useTodoDispatch from "./hooks/useTodoDispatch";
import {ActionPoints} from "./context/reducer/enums";
import {ITodo} from "./context/reducer/Todo.interface";
import useTodoState from "./hooks/useTodoState";
import Todos from "./Components/Todos/Todos";

function App() {
    const dispatch = useTodoDispatch()
    const {todos} = useTodoState()

    const onAddTodo = (todo: ITodo) => {
        dispatch({type: ActionPoints.ADD, payload: todo})
    }

    const onToggle = (id: number) => {
        dispatch({type: ActionPoints.COMPLETE, payload: id})
    }

    return (
        <div className="App">
            <h1>Todos</h1>
            <Input onAddTodo={onAddTodo} placeholder='Добавить задачу'/>
            <Todos todos={todos} onToggle={onToggle}/>
            <div>
                <p>Todo</p>
            </div>
            <div>
                <p>How much to do</p>
                <div>
                    <p>All</p>
                    <p>Active</p>
                    <p>Completed</p>
                </div>
                <p>Clear completed</p>
            </div>
        </div>
    );
}

export default App;
