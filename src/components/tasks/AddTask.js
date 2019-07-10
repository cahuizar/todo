import React, { useState } from 'react';

const AddTask = () => {
  const [task, setTask] = useState('');
  const onChange = e => setTask(e.target.value);
  const addTask = e => {
    e.preventDefault();
    console.log(task);
  };
  return (
    <form onSubmit={addTask}>
      <input
        type='text'
        name='addTask'
        placeholder='Add Task...'
        value={task}
        onChange={onChange}
      />
      <input type='submit' value='SUBMIT' className='btn btn-dark btn-block' />
    </form>
  );
};

export default AddTask;
