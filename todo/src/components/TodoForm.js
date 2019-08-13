import React, { useState, useReducer } from 'react';

import { initialState, Reducer } from '../reducers/reducers';

const TodoForm = () => {
    const [newTodo, setNewTodo] = useState('');
  
    const [state, dispatch] = useReducer(Reducer, initialState);
    console.log(state);
  
    const handleChanges = e => {
      setNewTodo({[e.target.name]: e.target.value});
    };
  
    return (
      <div>
        {!state.editing ? (
          <h1>
            {state.title}{' '}
            <button
              className="far fa-edit"
              onClick={() => dispatch({ type: 'TOGGLE_EDITING' })}>
              New Todo</button>
          </h1>
        ) : (
          <div>
            <input
              className="todo-input"
              type="text"
              name="newTodo"
              placeholder="Todo"
              value={newTodo.todo}
              onChange={handleChanges}
            />
            <button
              onClick={() =>
                dispatch({ type: 'ADD_TODO', payload: newTodo })
              }
            >
              Submit
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default TodoForm;