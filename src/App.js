import TodoContainer from './components/TodoContainer';
import TodoForm from './components/TodoForm';
import TodoContextProvider from './contexts/TodoContext';

function App() {
  return (
    <TodoContextProvider>
      <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
        <div className="my-4">
          <TodoForm />
        </div>
        <TodoContainer />
      </div>
    </TodoContextProvider>
  );
}

export default App;
