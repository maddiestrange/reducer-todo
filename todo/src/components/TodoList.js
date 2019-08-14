import React from 'react';

const TodoList = ({ todo, toggleTodo }) => {
  return (
    <div>
      {todo.map(todo => (
        <button key={todo.id}
             onClick={() => toggleTodo(todo.id)}
             className={todo.completed ? "completed" : ""}>
          {todo.item}
     </button>
      ))}
    </div>
  );
};

export default TodoList;