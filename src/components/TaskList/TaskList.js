import React, { useEffect} from 'react';
import './TaskList.scss';
import Task from './Task/Task';
import { useSelector } from 'react-redux'
const localStorageKey = 'tasks';

const TaskList = () => {

  const tasks = useSelector(state => state.todos)
  
  useEffect(() => localStorage.setItem(localStorageKey, JSON.stringify(tasks)));

  return (
    <section className="todo-container-flex">
      {tasks.map(item => <Task key={item.id} task={item} />)}
    </section>
  );
}

export default TaskList;
