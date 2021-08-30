import React from 'react';
import './TaskList.scss';
import Task from './Task/Task';

const TaskList = ({ tasks, removeTask, toggleDone }) => (
  <section className="todo-container-flex">
    {tasks.map(item => <Task key={item.id} task={item} removeTask={removeTask} toggleDone={toggleDone} />)}
  </section>
);

export default TaskList;
