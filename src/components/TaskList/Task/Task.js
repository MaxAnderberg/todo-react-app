import React from 'react';
import './Task.scss';
import Button from '../../Button/Button';
import { useDispatch } from 'react-redux'
import { removeTodoAction, toggleTodoAction } from '../../../features/actions/actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <article className={`todo-item ${task.done ? 'done' : 'todo'}`} onClick={() => dispatch(toggleTodoAction(task.id))}>
      <section className="todo-item__container-flex">
        <h1 className="todo-item__title">{task.name}</h1>
        <p className="todo-item__description">{task.description}</p>
      </section>
      <span className="todo-item__button-container-flex">
        <Button customClass={`todo-item__btn ${task.done ? '' : 'ishidden'}`} onClick={() => dispatch(removeTodoAction(task.id))} text="Remove" />
      </span>
    </article>
  );
}

export default Task;
