import React from "react";
import styled from "styled-components";

export const InputTodo = () => {
  return (
    <div>
      <SInput type="text" placeholder="Add todo" />
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
