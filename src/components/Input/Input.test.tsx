import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Тестирование Input компонента", () => {
	it("Вызывается функция Добавить при нажатии клавиши Enter", () => {
		const mockOnAddTodo = jest.fn();
		render(<Input placeholder="Add Todo" onAddTodo={mockOnAddTodo} />);

		const inputField = screen.getByPlaceholderText("Add Todo");
		fireEvent.change(inputField, { target: { value: "New Todo" } });
		fireEvent.keyDown(inputField, { key: "Enter" });

		expect(mockOnAddTodo).toHaveBeenCalledTimes(1);
		expect(mockOnAddTodo).toHaveBeenCalledWith({
			_id: expect.any(Number),
			text: "New Todo",
			completed: false,
		});
	});

	it('Вызывается добавить задачу, когда была кликнута кнопка "Добавить"', () => {
		const mockOnAddTodo = jest.fn();
		render(<Input placeholder="Add Todo" onAddTodo={mockOnAddTodo} />);

		const inputField = screen.getByPlaceholderText("Add Todo");
		fireEvent.change(inputField, { target: { value: "New Todo" } });

		const addButton = screen.getByText("Добавить");
		fireEvent.click(addButton);

		expect(mockOnAddTodo).toHaveBeenCalledTimes(1);
		expect(mockOnAddTodo).toHaveBeenCalledWith({
			_id: expect.any(Number),
			text: "New Todo",
			completed: false,
		});
	});
});
