import React from "react";
import styled from "styled-components";

export const Filter = (props) => {
  const { value, onChange } = props;

  const onClickFilter = (key) => {
    onChange(key);
  };

  return (
    <SContainer>
      <SLink href="#" onClick={() => onClickFilter('ALL')} className={value === 'ALL' ? 'is-active' : ''}>All</SLink>
      <SLink href="#" onClick={() => onClickFilter('TODO')} className={value === 'TODO' ? 'is-active' : ''}>Todo</SLink>
      <SLink href="#" onClick={() => onClickFilter('DONE')} className={value === 'DONE' ? 'is-active' : ''}>Done</SLink>
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
  &.is-active {
    color: #333;
  }
  &:hover {
    opacity: .8;
  }
`;
