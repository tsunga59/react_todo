import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

import { Header } from "./components/Header";
import { InputTodo } from "./components/InputTodo";
import { Filter } from "./components/Filter";
import { Todo } from "./components/Todo";

const App = () => {
  const [todos, setTodos] = useState([]);

  const onKeyPressAddTodo = text => {
    setTodos([...todos, { text, done: false }]);
  };

  return (
    <SCard>
      <Header />
      <SContainer>
        <InputTodo onKeyPress={onKeyPressAddTodo} />
        <Filter />
        {todos.map((todo) => (
          <Todo key={todo.text} todo={todo} />
        ))}
        <SCountArea>{todos.length} todos</SCountArea>
      </SContainer>
    </SCard>
  );
};

const SCard = styled.div`
  width: 700px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, .1);
`;

const SContainer = styled.div`
  padding: 15px;
`;

const SCountArea = styled.div`
  padding-top: 15px;
`;

export default App;
