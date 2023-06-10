import styled from 'styled-components';

type TodoTextProps = {
    completed: boolean;
}

export const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const TodoCheckbox = styled.input`
  margin-right: 8px;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #cfb2c8;
  border-radius: 50%;
  cursor: pointer;
  outline: none;

  &:checked {
    background-color: #555;
  }
`;

export const TodoText = styled.span<TodoTextProps>`
  flex: 1;
  font-size: 16px;
  color: #de9ecf;
  ${(props) => props.completed && 'text-decoration: line-through;'}
`;