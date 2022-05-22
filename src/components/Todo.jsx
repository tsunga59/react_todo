import React from "react";
import styled from "styled-components";

export const Todo = () => {
  return (
    <SContainer>
      <SLabel>
        <SInput type="checkbox" />
        <span>aaa</span>
      </SLabel>
    </SContainer>
  );
};

const SContainer = styled.div`
  padding: 0 10px;
`;

const SLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #333;
  padding: 5px 10px;
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