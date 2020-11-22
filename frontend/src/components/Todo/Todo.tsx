import React, { useState } from 'react';

const ToDo = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([{}]);

  const handleNewTodoChange = (e: any) => {
    e.preventDefault();
    setNewTodo(e.target.value);
  };
  const handleNewTodo = (e: any) => {
    e.preventDefault();
    if (newTodo === '') {
      return;
    }
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    setNewTodo('');
    e.target.reset();
  };
  const removeTodo = (id: any) => {
    setTodos(todos.filter((todo: any) => todo.id != id));
  };
  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={handleNewTodo}>
        <input placeholder='Enter todo...' onChange={handleNewTodoChange}></input>
        <ul>
          {todos.map((todo: any) => (
            <li key={todo.id}>
              {todo.text}
              <a href='#' onClick={() => removeTodo(todo.id)}>
                X
              </a>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
};

export default ToDo;
