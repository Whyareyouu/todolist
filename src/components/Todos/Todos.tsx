import React from "react";
import { ITodo } from "../../context/reducer/Todo.interface";
import Todo from "../Todo/Todo";
import { TodosWrapper } from "./Todos.styles";

type TodosProps = {
	onToggle: (id: number) => void;
	todos: ITodo[];
};
const Todos = ({ todos, onToggle }: TodosProps): React.JSX.Element => {
	if (todos.length === 0) {
		return (
			<div style={{ color: "#8aa7d4" }}>
				У вас пока нет запланированных задач
			</div>
		);
	}
	return (
		<TodosWrapper>
			{todos.map((todo) => (
				<Todo
					text={todo.text}
					key={todo.id}
					completed={todo.completed}
					onToggle={onToggle}
					id={todo.id}
					data-testid="toggle-button"
				/>
			))}
		</TodosWrapper>
	);
};

export default Todos;
