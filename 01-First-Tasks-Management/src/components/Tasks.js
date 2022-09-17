import React, {useState} from 'react'
import Task from './task'


const Tasks = ({tasks, onDelete, onToggle}) => {
  return  (
    <>
    {tasks.map((task) => (
        <Task 
        onToggle={onToggle}
        onDelete={onDelete}
        key={task.id} 
        task={task}/>
    ))}
  </>
  );
};

export default Tasks

