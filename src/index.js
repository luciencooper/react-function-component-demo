import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClassTodo from './components/ClassTodo';
import FunctionTodo from './components/FunctionTodo';

ReactDOM.render(
  <React.StrictMode>
    <ClassTodo />
    <FunctionTodo />
  </React.StrictMode>,
  document.getElementById('root')
);

