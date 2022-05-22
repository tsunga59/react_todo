import React from "react";
import styled from "styled-components";

export const Header = () => {
  return <SHeader>Todo App</SHeader>;
};

const SHeader = styled.header`
  font-size: 18px;
  font-weight: bold;
  color: #e9e9e9;
  background-color: #333;
  padding: 10px 15px;
`;
