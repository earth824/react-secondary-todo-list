import { Component } from 'react';
import TodoContent from './TodoContent';

class TodoItem extends Component {
  render() {
    return (
      <li
        className={`list-group-item p-3 callout-${
          this.props.todo.completed ? 'success' : 'warning'
        }`}
      >
        <TodoContent todo={this.props.todo} />
      </li>
    );
  }
}

export default TodoItem;
