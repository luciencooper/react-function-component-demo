import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClassTodo from './components/ClassTodo';
import FunctionalTodo from './components/FunctionalTodo';

ReactDOM.render(
  <React.StrictMode>
    <ClassTodo />
    <FunctionalTodo />
  </React.StrictMode>,
  document.getElementById('root')
);

