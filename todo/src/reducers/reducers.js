
  export const initialState = {
    todo: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
        }
    ],
    editing: false
  }
  
  export const Reducer =  (state, action) => {
    switch (action.type) {
      case 'TOGGLE_TODO':
          return {
            ...state,
            todo: state.todo.map(todo => {
              if (todo.id === action.payload) {
                return {
                  ...todo,
                  completed: !todo.completed
                };
              } else {
                return todo;
              }
            })
          };
          
      case 'ADD_TODO':
          const newTodo = {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        return {
            ...state,
            todo: [...state.todo, newTodo]
        };

        case "CLEAR_COMPLETED":
            return {
             ...state,
            todo: state.todo.filter(todo => !todo.completed)
        };

        default: 
        return state;
    }
    }
    