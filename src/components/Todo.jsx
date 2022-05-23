import React from "react";
import styled from "styled-components";

export const Todo = (props) => {
  const { todo } = props;

  return (
    <SLabel>
      <SInput type="checkbox" checked={todo.done} />
      <span>{todo.text}</span>
    </SLabel>
  );
};

const SLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #333;
  padding: 5px 15px;
  margin: -1px 0;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  &:hover {
    background-color: #e9e9e9;
    cursor: pointer;
  }
`;

const SInput = styled.input`
  margin-right: 10px;
  transform: scale(1.3);
  outline: none;
`;
