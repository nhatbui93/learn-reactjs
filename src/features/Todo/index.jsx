import React, { useState } from 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {};
function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];
  //create state todolist
  const [todoList, setTodoList] = useState(initTodoList);

  //create state filter todo
  const [filterStatus, setFilterStatus] = useState('all');

  //handle render todolist
  const handleTodoList = (todo, index) => {
    //clone array
    const newTodoList = [...todoList];
    // toggle state
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? 'completed' : 'new',
    };
    // upddate todolist
    setTodoList(newTodoList);
  };

  //handle click
  const handleShowAll = () => {
    setFilterStatus('all');
  };
  const handleShowCompleted = () => {
    setFilterStatus('completed');
  };
  const handleShowNew = () => {
    setFilterStatus('new');
  };

  // handle render todolist after filter
  const renderTodoList = todoList.filter((todo) => {
    return filterStatus === 'all' || filterStatus === todo.status;
  });
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoList} />
      <div className='block-button'>
        <button onClick={handleShowAll}>Show all</button>
        <button onClick={handleShowCompleted}>Show completed</button>
        <button onClick={handleShowNew}>Show new</button>
      </div>
    </div>
  );
}

export default TodoFeature;
