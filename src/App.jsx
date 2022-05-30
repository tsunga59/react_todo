import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

import { Header } from "./components/Header";
import { InputTodo } from "./components/InputTodo";
import { Filter } from "./components/Filter";
import { Todo } from "./components/Todo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('ALL');

  const onKeyPressAddTodo = (text) => {
    setTodos([...todos, { text, done: false }]);
  };

  const onChangeFilter = (value) => setFilter(value);

  const displayTodos = todos.filter((todo) => {
    if (filter === 'ALL') return todo;
    if (filter === 'TODO') return !todo.done;
    if (filter === 'DONE') return todo.done;
  });

  const onCheckDone = (checked) => {
    const newTodos = todos.map((todo) => {
      if (todo.text === checked.text) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <SCard>
      <Header />
      <SContainer>
        <InputTodo onKeyPress={onKeyPressAddTodo} />
        <Filter onChange={onChangeFilter} value={filter} />
        {displayTodos.map((todo) => (
          <Todo key={todo.text} todo={todo} onCheck={onCheckDone} />
        ))}
        <SCountArea>{filter === 'ALL' ? displayTodos.length : `${displayTodos.length}/${todos.length}`} todos</SCountArea>
      </SContainer>
    </SCard>
  );
};

const SCard = styled.div`
  width: 700px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
`;

const SContainer = styled.div`
  padding: 15px;
`;

const SCountArea = styled.div`
  padding-top: 15px;
`;

export default App;
