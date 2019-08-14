import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { initialState, Reducer } from './reducers/reducers';

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  console.log('state', state);

  function toggleTodo(id) {
    dispatch({
      type: "TOGGLE_TODO",
      payload: id
    });
  }

  function clearTodo() {
    dispatch({
      type: "CLEAR_COMPLETED"
    });
  }

  const addTodo(item) {
    dispatch({ type: "ADD_TODO", payload: item });
  };

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
      <TodoList todoArray={state.todo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
