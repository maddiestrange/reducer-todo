import React, { useState, useReducer } from 'react';


function TodoForm(props) {
    const { addTodo, clearCompleted } = props;
    const [newTodo, setNewTodo] = useState('');
  
    const handleChanges = e => {
      setNewTodo(e.target.value);
    };

    const handleSubmit = e => {
      e.preventDefault();
      addTodo(newTodo);
      setNewTodo('');
    };

    const handleClear = event => {
      event.preventDefault();
      clearCompleted();
    };

    return (
      <form>
            <input
              className="todo-input"
              type="text"
              name="newTodo"
              placeholder="Todo"
              value={newTodo}
              onChange={handleChanges}
            />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleClear}>Clear Completed</button>
        </form>
    );
  };
  
  export default TodoForm;