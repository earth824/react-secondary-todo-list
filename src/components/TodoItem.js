import { useContext } from 'react';
import { UPDATE_TODO } from '../actions/todoAction';
import axios from '../config/axios';
import { TodoContext } from '../contexts/TodoContext';
import TodoContent from './TodoContent';
import TodoForm from './TodoForm';

function TodoItem({ todo, editingTodo, openEdit, closeEdit }) {
  const { completed, id } = todo;
  const { dispatch } = useContext(TodoContext);

  const updateTodo = title => {
    axios
      .put('/todos/' + id, { title, completed })
      .then(res => {
        dispatch({ type: UPDATE_TODO, payload: { todo: res.data.todo } });
        closeEdit();
      })
      .catch(err => console.log(err));
  };

  return (
    <li
      className={`list-group-item p-3 callout-${
        completed ? 'success' : 'warning'
      }`}
    >
      {editingTodo.id === id ? (
        <TodoForm todo={todo} onCancel={closeEdit} onSubmit={updateTodo} />
      ) : (
        <TodoContent todo={todo} openEdit={openEdit} />
      )}
    </li>
  );
}

export default TodoItem;
