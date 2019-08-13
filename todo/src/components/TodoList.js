import React, { useState, useReducer } from 'react';

import { initialState, Reducer } from '../reducers/reducers';

const TodoList = () => {
    const [state] = useReducer(Reducer, initialState);
    
    return (
        <div className="list">
        <ul>
        {console.log(state.todo)}
        {state.todo.map(item => <li key={item.id}>{item.item}</li>)}
        </ul>
        </div>
    );
  };
  
  export default TodoList;
  