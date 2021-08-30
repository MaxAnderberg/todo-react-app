import React from 'react';
import './TaskList.scss';
import Task from './Task/Task';

const TaskList = ({ tasks, onDelete, onToggle }) => (
  <section className="todo-container-flex">
    {tasks.map(item => <Task key={item.id} task={item} onDelete={onDelete} onToggle={onToggle} />)}
  </section>
);

export default TaskList;
