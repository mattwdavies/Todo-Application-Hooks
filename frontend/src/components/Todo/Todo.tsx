/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from 'react';
import { jsx } from 'theme-ui';
import moment from 'moment';

const ToDo = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const handleNewTodoChange = (e: any) => {
    e.preventDefault();
    setNewTodo(e.target.value);
  };
  const handleNewTodo = (e: any) => {
    e.preventDefault();
    if (newTodo === '') return;
    const newTodoArray: any = [...todos, { id: moment().format('MMMM Do YYYY, h:mm:ss a'), text: newTodo }];
    setTodos(newTodoArray);
    e.target.reset();
    setNewTodo('');
  };
  const removeTodo = (id: any) => {
    setTodos(todos.filter((todo: any) => todo.id != id));
  };
  return (
    <div sx={{ width: 'todoWidth', margin: 'auto', textAlign: 'left' }}>
      <form onSubmit={handleNewTodo}>
        <div
          sx={{
            margin: 'm',
          }}
        >
          <h1 sx={{ fontFamily: 'title', fontSize: 'xxxxl', color: 'text', textAlign: 'center', margin: 'm' }}>Todo</h1>
        </div>
        <input placeholder='Enter todo...' onChange={handleNewTodoChange} sx={{ display: 'block', margin: 'auto' }}></input>
        <ul>
          {todos.map((todo: any) => (
            <li
              key={todo.id}
              sx={{
                listStyle: 'none',
                padding: 'm',
                margin: 's',
                backgroundColor: 'panel',
                borderRadius: 'l',
              }}
            >
              <a
                href='#'
                onClick={() => removeTodo(todo.id)}
                sx={{ float: 'right', textDecoration: 'none', color: 'text', fontSize: 'xl' }}
              >
                x
              </a>
              <h3 sx={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>{todo.text}</h3>
              <p sx={{ display: 'inline-block' }}>Created: {todo.id}</p>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default ToDo;
