
const localStorageKey = 'tasks';
const initialState = JSON.parse(localStorage.getItem(localStorageKey)) || []

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      console.log('HELLO THERE DUDE', action.payload)
      return [
        ...state,
        {
          id: Date.now().toString(),
          name: action.payload[0],
          description: action.payload[1],
          done: false
        }
      ]
    }
    case 'todos/todoToggled': {
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo
        }
        return {
          ...todo,
          done: !todo.done
        }
      })
    }
    case 'todos/todoRemoved': {
      return state.filter(todo => todo.id !== action.payload)
    }
    default:
      return state
  }
}