import React from 'react';
import Form from './Form/Form';
import TaskList from './TaskList/TaskList';
import './Main.scss';

const Main = () => {
  return (
    <main className="main-container-flex">
      <Form />
      <TaskList />
    </main>
  );
};

export default Main;
