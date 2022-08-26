import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <ul className="list-group my-2">
      {props.todos.map(item => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
}

export default TodoList;
