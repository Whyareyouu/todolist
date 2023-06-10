import { fireEvent, render, screen } from "@testing-library/react";
import { ITodo } from "../../context/reducer/Todo.interface";
import Todos from "./Todos";

const todos: ITodo[] = [
	{ id: 1, text: "Task 1", completed: false },
	{ id: 2, text: "Task 2", completed: true },
];

describe("Тестирование todos компонента", () => {
	it('Отображает сообщение "Нет задач", когда список задач пуст', () => {
		render(<Todos todos={[]} onToggle={() => {}} />);

		expect(
			screen.getByText("У вас пока нет запланированных задач")
		).toBeInTheDocument();
	});

	it("Корректное отображение всего списка задач", () => {
		render(<Todos todos={todos} onToggle={() => {}} />);
		expect(screen.getByText("Task 1")).toBeInTheDocument();
		expect(screen.getByText("Task 2")).toBeInTheDocument();
	});

	it("Задачи отмечают как завершенные", () => {
		const mockOnToggle = jest.fn();
		render(
			<Todos
				todos={[{ id: 1, text: "Task 1", completed: false }]}
				onToggle={mockOnToggle}
			/>
		);

		const toggleButton = screen.getByRole("button");
		fireEvent.click(toggleButton);

		expect(mockOnToggle).toHaveBeenCalledTimes(1);
		expect(mockOnToggle).toHaveBeenCalledWith(1);
	});
});
