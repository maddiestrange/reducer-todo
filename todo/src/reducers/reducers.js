
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
      case 'TOGGLE_EDITING':
        return {
          ...state,
          editing: !state.editing
        };
      case 'ADD_TODO':
        return {
          ...state,
          todo:
          [...state.todo,
            { 
            item: action.payload,
            completed: false,
            id: Date.now(),
             }],
           editing: !state.editing
        };

        default: 
        return state;
    }
    }
    