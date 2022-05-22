import React from "react";
import styled from "styled-components";
import "./App.css";

import { Header } from "./components/Header";
import { InputTodo } from "./components/InputTodo";
import { Filter } from "./components/Filter";

const App = () => {
  return (
    <SContainer>
      <Header />
      <InputTodo />
      <Filter />
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
  border-radius: 5px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, .1);
`;

export default App;
