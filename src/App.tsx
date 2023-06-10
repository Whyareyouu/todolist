import React, { useEffect, useState } from "react";
import Input from "./components/Input/Input";
import useTodoDispatch from "./hooks/useTodoDispatch";
import { ActionPoints } from "./enums/Actions.enum";
import { ITodo } from "./context/reducer/Todo.interface";
import useTodoState from "./hooks/useTodoState";
import Todos from "./components/Todos/Todos";
import Menu from "./components/Menu/Menu";
import { Patterns } from "./enums/Patterns.enum";
import { Title, Wrapper } from "./styles/App.styles";

function App() {
	const [filtredTodos, setFiltredTodos] = useState<ITodo[]>([]);
	const dispatch = useTodoDispatch();
	const { todos } = useTodoState();

	useEffect(() => {
		setFiltredTodos(todos);
	}, [todos]);

	const onAddTodo = (todo: ITodo) => {
		dispatch({ type: ActionPoints.ADD, payload: todo });
	};

	const onToggle = (id: number) => {
		dispatch({ type: ActionPoints.COMPLETE, payload: id });
	};

	const onClearCompleted = () => {
		dispatch({ type: ActionPoints.CLEARCOMPLETED });
	};

	const onFilter = (pattern: string) => {
		switch (pattern) {
			case Patterns.ALL:
				setFiltredTodos(todos);
				break;
			case Patterns.ACTIVE:
				setFiltredTodos(todos.filter((todo) => !todo.completed));
				break;
			case Patterns.COMPLETED:
				setFiltredTodos(todos.filter((todo) => todo.completed));
				break;
			default:
				setFiltredTodos(todos);
		}
	};

	return (
		<Wrapper>
			<Title>Todos</Title>
			<Input onAddTodo={onAddTodo} placeholder="Добавить задачу" />
			<Todos todos={filtredTodos} onToggle={onToggle} />
			<Menu
				activeTodo={todos.filter((todo) => !todo.completed).length}
				onClearCompleted={onClearCompleted}
				onFilter={onFilter}
			/>
		</Wrapper>
	);
}

export default App;
