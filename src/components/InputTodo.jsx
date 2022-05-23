import React, { useState } from "react";
import styled from "styled-components";

export const InputTodo = (props) => {
  const { onKeyPress } = props;
  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = e => setTodoText(e.target.value);

  const onKeyPressEnter = e => {
    if (e.key === "Enter") {
      if (todoText === "") return;
      onKeyPress(todoText);
      setTodoText("");
    }
  }

  return (
    <div>
      <SInput type="text" placeholder="Add todo" value={todoText} onChange={onChangeTodoText} onKeyPress={onKeyPressEnter} />
    </div>
  );
};

const SInput = styled.input`
  font-size: 16px;
  width: 100%;
  color: #333;
  background-color: #e9e9e9;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  outline: none;
`;
