import React, {useCallback, useEffect, useMemo, useState} from "react";
import useTodoDispatch from "./hooks/useTodoDispatch";
import { ActionPoints } from "./enums/Actions.enum";
import { ITodo } from "./context/reducer/Todo.interface";
import useTodoState from "./hooks/useTodoState";
import { Patterns } from "./enums/Patterns.enum";
import { Title, Wrapper } from "./styles/App.styles";
import {Input, Menu, Todos} from "./components";

function App() {
	const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([]);
	const dispatch = useTodoDispatch();
	const { todos } = useTodoState();
	
	useEffect(() => {
		setFilteredTodos(todos);
	}, [todos]);

	const onAddTodo = useCallback((todo: ITodo) => {
		dispatch({ type: ActionPoints.ADD, payload: todo });
	}, [dispatch]);

	const onToggle = useCallback((id: number) => {
		dispatch({ type: ActionPoints.COMPLETE, payload: id });
	}, [dispatch]);

	const onClearCompleted = useCallback(() => {
		dispatch({ type: ActionPoints.CLEARCOMPLETED });
	}, [dispatch]);

	const onFilter = (pattern: string) => {
		switch (pattern) {
			case Patterns.ALL:
				setFilteredTodos(todos);
				break;
			case Patterns.ACTIVE:
				setFilteredTodos(todos.filter((todo) => !todo.completed));
				break;
			case Patterns.COMPLETED:
				setFilteredTodos(todos.filter((todo) => todo.completed));
				break;
			default:
				setFilteredTodos(todos);
		}
	};

	const activeTodos = useMemo(() => todos.filter(todo => !todo.completed).length, [todos])

	return (
		<Wrapper>
			<Title>Todos</Title>
			<Input onAddTodo={onAddTodo} placeholder="Добавить задачу" />
			<Todos todos={filteredTodos} onToggle={onToggle} />
			<Menu
				activeTodo={activeTodos}
				onClearCompleted={onClearCompleted}
				onFilter={onFilter}
			/>
		</Wrapper>
	);
}

export default App;
