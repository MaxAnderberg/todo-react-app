import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../../features/actions/actions';

import './Form.scss';

const Form = () => {
  const dispatch = useDispatch();
  const [name, addText] = useState('');
  const [description, addDescription] = useState('');
  const onSubmit = event => {
    event.preventDefault();

    if (name == null || /^ +$/.test(name)) {
      return;
    }
    dispatch(addTodoAction(name, description));

    addText('');
    addDescription('');
  };

  return (
    <form action="#" className="todo-form" onSubmit={onSubmit}>
      <label className="todo-form__label" htmlFor="todo__name">Name</label>
      <input className="todo-form__input" id="todo__name" value={name} type="text" placeholder="Task Name" required onChange={event => { addText(event.target.value); }} />
      <label className="todo-form__label" htmlFor="todo__description">Description</label>
      <input className="todo-form__input" id="todo__description" value={description} type="text" placeholder="Task Description (optional)" onChange={event => { addDescription(event.target.value); }} />
      <input className="btn todo-form__submit" type="submit" value="Add Task" />
    </form>
  );
};

export default Form;
