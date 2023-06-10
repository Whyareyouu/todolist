import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import TodoListProvider from "./context/context";


describe("Тестирование App компонента", () => {
    it("Корректная загрузка title", () => {
        render(<TodoListProvider><App /></TodoListProvider> );
        const titleElement = screen.getByText("Todos");
        expect(titleElement).toBeInTheDocument();
    });

    it("Добавляет новый todo при вводе входного значения и нажатии клавиши \"Enter\".", () => {
        render(<TodoListProvider><App /></TodoListProvider>);
        const inputElement = screen.getByPlaceholderText("Добавить задачу");
        const todoText = "New Todo";
        fireEvent.change(inputElement, { target: { value: todoText } });
        fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
        const todoElement = screen.getByText(todoText);
        expect(todoElement).toBeInTheDocument();
    });

    it("фильтрует todo на основе выбора в меню", () => {
        render(<TodoListProvider><App /></TodoListProvider>);
        const inputElement = screen.getByPlaceholderText("Добавить задачу");
        const todoText = "New Todo";
        fireEvent.change(inputElement, { target: { value: todoText } });
        fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
        const allFilterElement = screen.getByText("All");
        const activeFilterElement = screen.getByText("Active");
        const completedFilterElement = screen.getByText("Completed");

        fireEvent.click(activeFilterElement);
        const activeTodoElement = screen.getByText(todoText);
        expect(activeTodoElement).toBeInTheDocument();

        const todoButton = screen.getByTestId('toggle-button')
        fireEvent.click(todoButton)
        fireEvent.click(completedFilterElement);
        const completedTodoElement = screen.getByText(todoText);
        expect(completedTodoElement).toBeInTheDocument();

        fireEvent.click(allFilterElement);
        const allTodoElement = screen.getByText(todoText);
        expect(allTodoElement).toBeInTheDocument();
    });

    it("очищает выполненные todo при нажатии кнопки \"Очистить завершенные\"", () => {
        render(<TodoListProvider><App /></TodoListProvider>);
        const inputElement = screen.getByPlaceholderText("Добавить задачу");
        const todoText = "New Todo";
        fireEvent.change(inputElement, { target: { value: todoText } });
        fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
        const todoElement = screen.getByText(todoText);
        expect(todoElement).toBeInTheDocument();
        const todoButton = screen.getByTestId('toggle-button')
        fireEvent.click(todoButton)
        const clearCompletedButton = screen.getByText("Clear completed");
        fireEvent.click(clearCompletedButton);
        expect(todoElement).not.toBeInTheDocument();
    });
});