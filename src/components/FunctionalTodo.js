import React from 'react';
import FunctionalTodoList from './FunctionalTodoList';

const FunctionalTodoApp = () => {

  const [items, setItems] = React.useState([]);
  const [text, setText] = React.useState('');

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    const newItem = {
      text: text,
      id: Date.now()
    };
    setItems(items => items.concat(newItem));
    setText('');
  }

  return (
    <div>
      <h3>Functional TODO</h3>
      <FunctionalTodoList items={items} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">
          What needs to be done?
        </label>
        <input
          id="new-todo"
          onChange={handleChange}
          value={text}
        />
        <button>
          Add #{items.length + 1}
        </button>
      </form>
    </div>
  );

}

export default FunctionalTodoApp;