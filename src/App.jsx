import React from "react";
import styled from "styled-components";
import "./App.css";

import { Header } from "./components/Header";

const App = () => {
  return (
    <SContainer>
      <Header />
      <div className="input-area">
        <input type="text" placeholder="add todo" />
        <button>Add</button>
      </div>
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
  width: 750px;
  margin: 0 auto;
  padding: 30px;
`;

export default App;
