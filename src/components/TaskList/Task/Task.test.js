import {render, screen, cleanup} from '@testing-library/react';
import Task from './Task'
afterEach(() => {
    cleanup();
});

test('should reneder task component as not done', () => {
    const task = {id:1, name:'Buy Milk', done:false}
    render(<Task key={task.id} task={task}/>)
    const taskElement = screen.getByRole('article');
    expect(taskElement).toHaveTextContent('Buy Milk');
    expect(taskElement).toHaveClass('todo');
});

test('should reneder task component as done', () => {
    const task = {id:1, name:'Buy Milk', done:true}
    render(<Task key={task.id} task={task}/>)
    const taskElement = screen.getByRole('article');
    expect(taskElement).toHaveTextContent('Buy Milk');
    expect(taskElement).toHaveClass('done');
});