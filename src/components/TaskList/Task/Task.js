import React from 'react';
import './Task.scss';
import Button from '../../Button/Button';

const Task = ({ task, removeTask, toggleDone }) => (
  <article className={`todo-item ${task.done ? 'done' : 'todo'}`} onClick={() => toggleDone(task.id)}>
    <section className="todo-item__container-flex">
      <h1 className="todo-item__title">{task.name}</h1>
      <p className="todo-item__description">{task.description}</p>
    </section>
    <span className="todo-item__button-container-flex">
      <Button customClass={`todo-item__btn ${task.done ? '' : 'ishidden'}`} onClick={e => removeTask(task.id, e)} text="Remove" />
    </span>
  </article>
);

export default Task;
