import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react'
import {Button, InputField, InputWrapper} from "./Input.styles";
import {ITodo} from "../../context/reducer/Todo.interface";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    onAddTodo: (todo: ITodo) => void
}

const Input = ({ placeholder, onAddTodo }: InputProps): React.JSX.Element => {
    const [inputValue, setInputValue] = useState<string>('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onAddTodo({id: Math.floor(Math.random() * 1000000), text: inputValue, completed: false})
            setInputValue('')
        }
    };

    const handleAddTodo = () => {
        onAddTodo({id: Math.floor(Math.random() * 1000000), text: inputValue, completed: false})
        setInputValue('')
    }

    return (
        <InputWrapper>
            <InputField
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <Button onClick={handleAddTodo}>
                Добавить
            </Button>
        </InputWrapper>
    );
};

export default Input;