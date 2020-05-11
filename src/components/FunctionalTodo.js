import React from 'react';

const FunctionalTodoApp = () => {

  const [items, setItems] = React.useState([]);
  const [text, setText] = React.useState('');

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items.length === 0) {
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
      <h3>TODO</h3>
      <TodoList items={this.state.items} />
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-todo">
          What needs to be done?
        </label>
        <input
          id="new-todo"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button>
          Add #{this.state.items.length + 1}
        </button>
      </form>
    </div>
  );

}

export default ClassTodoApp;