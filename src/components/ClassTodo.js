import React from 'react';
import ClassTodoList from './ClassTodoList';

class ClassTodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: JSON.parse(localStorage.getItem('classTodoItems')) || [],
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem('classTodoItems', JSON.stringify(this.state.items));
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    return (
      <div>
        <h3>Class TODO</h3>
        <ClassTodoList items={this.state.items} />
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

}

export default ClassTodoApp;