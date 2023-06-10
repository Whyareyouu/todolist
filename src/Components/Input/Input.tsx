import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react'
import {Button, InputField, InputWrapper} from "./Input.styles";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    onAddTodo: (todo: string) => void
}

const Input = ({ placeholder, onAddTodo }: InputProps): React.JSX.Element => {
    const [inputValue, setInputValue] = useState<string>('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onAddTodo(inputValue);
            setInputValue('')
        }
    };

    const handleAddTodo = () => {
        onAddTodo(inputValue);
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