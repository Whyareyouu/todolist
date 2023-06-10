import React from "react";
import { TodoButton, TodoText, TodoWrapper } from "./Todo.style";

type TodoProps = {
	id: number;
	text: string;
	completed: boolean;
	onToggle: (id: number) => void;
};

const Todo = ({
	id,
	text,
	completed,
	onToggle,
}: TodoProps): React.JSX.Element => {
	return (
		<TodoWrapper>
			<TodoButton
				onClick={() => onToggle(id)}
				completed={completed}
				data-testid="toggle-button"
			/>
			<TodoText completed={completed}>{text}</TodoText>
		</TodoWrapper>
	);
};

export default Todo;
