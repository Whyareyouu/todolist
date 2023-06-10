import styled, {css} from "styled-components";

type TodoTextProps = {
    completed: boolean;
};

export const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const TodoButton = styled.button<TodoTextProps>`
  margin-right: 8px;
  appearance: none;
  width: 25px;
  height: 25px;
  border: 2px solid #cfb2c8;
  border-radius: 25%;
  cursor: pointer;
  outline-color: #e398d1;
  background-color: transparent;
  position: relative;
  &:hover{
    border-color: #e398d1;
  }

  ${props => props.completed && css`
    &::before {
      content: '✓';

      height: 15px;
      width: 15px;
      display: block;

      position: absolute;
      top: -6px;
      left: 2px;

      font-size: 24px;
      color: #3dc938;
    }
  `}
`;

export const TodoText = styled.span<TodoTextProps>`
  flex: 1;
  font-size: 16px;
  color: #de9ecf;
  text-decoration: ${props => props.completed ? "line-through" : "none"};
  word-break: break-all;
`;
