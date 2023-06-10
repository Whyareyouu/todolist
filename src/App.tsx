import React from 'react';
import Todo from "./Components/Todo/Todo";
import Input from "./Components/Input/Input";
import useTodoDispatch from "./hooks/useTodoDispatch";
import {ActionPoints} from "./context/reducer/enums";
import {ITodo} from "./context/reducer/Todo.interface";

function App() {
    const dispatch = useTodoDispatch()
    const onAddTodo = (todo: ITodo) => {
        dispatch({type: ActionPoints.ADD, payload: todo})
    }
    return (
        <div className="App">
            <h1>Todos</h1>
            <Input onAddTodo={onAddTodo} placeholder='Добавить задачу' />
            <Todo text='12312312' completed={false} onToggle={()=> console.log("123")} />
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
