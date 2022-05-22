import React from "react";
import styled from "styled-components";
import "./App.css";

import { Header } from "./components/Header";
import { InputTodo } from "./components/InputTodo";

const App = () => {
  return (
    <SContainer>
      <Header />
      <InputTodo />
      <div className="filter-area">
        <a href="#">All</a>
        <a href="#">Todo</a>
        <a href="#">Done</a>
      </div>
      <div className="todo-area">
        <label>
          <input type="checkbox" />
          <span>aaa</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>bbb</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>ccc</span>
        </label>
      </div>
      <p>3 todos</p>
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 700px;
  background-color: #fff;
  margin: 0 auto;
`;

export default App;
