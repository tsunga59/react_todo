import React from "react";
import styled from "styled-components";

export const Filter = () => {
  return (
    <SContainer>
      <SLink href="#">All</SLink>
      <SLink href="#">Todo</SLink>
      <SLink href="#">Done</SLink>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
`;

const SLink = styled.a`
  color: #45a1b8;
  margin: 0 5px;
  text-decoration: none;
  &:hover {
    opacity: .8;
  }
`;
