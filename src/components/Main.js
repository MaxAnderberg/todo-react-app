import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import TaskList from './TaskList/TaskList';
import './Main.scss';

const Main = () => {
  const localStorageKey = 'tasks';
  const [tasks, updateTasks] = useState(JSON.parse(localStorage.getItem(localStorageKey)) || []);

  useEffect(() => localStorage.setItem(localStorageKey, JSON.stringify(tasks)));

  const removeTask = (id, event) => {
    updateTasks(tasks.filter(task => task.id !== id));
    event.stopPropagation();
  };

  const createTask = task => {
    const newTask = { id: Date.now().toString(), ...task };
    updateTasks([...tasks, newTask]);
  };

  const toggleDone = id => {
    updateTasks(tasks.map(task => (task.id === id ? { ...task, done: !task.done } : task)));
  };

  return (
    <main className="main-container-flex">
      <Form onAdd={createTask} />
      <TaskList tasks={tasks} removeTask={removeTask} toggleDone={toggleDone} />
    </main>
  );
};

export default Main;
