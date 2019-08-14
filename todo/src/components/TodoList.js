import React from 'react';

const TodoList = ({ todo, toggleTodo }) => {
  return (
    <div>
      {todo.map(todo => (
        <div key={todo.id}
             onClick={() => toggleTodo(todo.id)}
             className={todo.completed ? "completed" : ""}>
          {todo.item}
        </div>
      ))}
    </div>
  );
};

export default TodoList;