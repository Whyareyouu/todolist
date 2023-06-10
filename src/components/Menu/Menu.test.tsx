import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Menu from './Menu';
import {Patterns} from "../../enums/Patterns.enum";

describe('Тестирование компонента Menu', () => {
    test('вызывается фильтр с шаблоном "All" при нажатии кнопки "All"', () => {
        const mockOnFilter = jest.fn();
        render(
            <Menu activeTodo={0} onClearCompleted={() => {}} onFilter={mockOnFilter} />
        );

        const allElement = screen.getByText('All');
        fireEvent.click(allElement);

        expect(mockOnFilter).toHaveBeenCalledTimes(1);
        expect(mockOnFilter).toHaveBeenCalledWith(Patterns.ALL);
    });

    test('вызывается фильтр с шаблоном "Active" при нажатии кнопки "Active"', () => {
        const mockOnFilter = jest.fn();
        render(
            <Menu activeTodo={0} onClearCompleted={() => {}} onFilter={mockOnFilter} />
        );

        const activeElement = screen.getByText('Active');
        fireEvent.click(activeElement);

        expect(mockOnFilter).toHaveBeenCalledTimes(1);
        expect(mockOnFilter).toHaveBeenCalledWith(Patterns.ACTIVE);
    });

    test('вызывается фильтр с шаблоном "Completed" при нажатии кнопки "Completed"', () => {
        const mockOnFilter = jest.fn();
        render(
            <Menu activeTodo={0} onClearCompleted={() => {}} onFilter={mockOnFilter} />
        );

        const completedElement = screen.getByText('Completed');
        fireEvent.click(completedElement);

        expect(mockOnFilter).toHaveBeenCalledTimes(1);
        expect(mockOnFilter).toHaveBeenCalledWith(Patterns.COMPLETED);
    });

    test('вызывается функция "Очистить завершенные" при нажатии кнопки "Очистить завершенные"', () => {
        const mockOnClearCompleted = jest.fn();
        render(
            <Menu
                activeTodo={0}
                onClearCompleted={mockOnClearCompleted}
                onFilter={() => {}}
            />
        );

        const clearButton = screen.getByText('Clear completed');
        fireEvent.click(clearButton);

        expect(mockOnClearCompleted).toHaveBeenCalledTimes(1);
    });
});