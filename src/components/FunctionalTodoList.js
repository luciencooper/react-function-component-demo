import React from 'react';

const FunctionalTodoList = (props) => (
  <ul>
    {this.props.items.map(item => (
      <li key={item.id}>{item.text}</li>
    ))}
  </ul>
);

export default FunctionalTodoList;