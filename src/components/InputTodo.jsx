import React from "react";
import styled from "styled-components";

export const InputTodo = () => {
  return (
    <SContainer>
      <SInput type="text" placeholder="Add todo" />
    </SContainer>
  );
};

const SContainer = styled.div`
  padding: 10px;
`;

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
