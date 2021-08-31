const addTodoAction = (name, description) => ({
  type: 'todos/todoAdded',
  payload: [name, description],
});

const toggleTodoAction = id => ({
  type: 'todos/todoToggled',
  payload: id,
});

const removeTodoAction = id => ({
  type: 'todos/todoRemoved',
  payload: id,
});

export { addTodoAction, toggleTodoAction, removeTodoAction }