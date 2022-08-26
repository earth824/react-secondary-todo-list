import { Component } from 'react';

class TodoForm extends Component {
  state = {
    input: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    // createTodo
    this.props.onSubmit(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={this.state.input}
            onChange={e => this.setState({ input: e.target.value })}
          />
          <button className="btn btn-primary">
            <i className="fa-solid fa-check" />
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => this.setState({ input: '' })}
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        {/* <small className="text-danger">Title is required.</small> */}
      </form>
    );
  }
}

export default TodoForm;
