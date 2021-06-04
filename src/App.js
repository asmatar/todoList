import React, { useState } from 'react';
import './App.scss';
import Header from './Header';
import Todo from './Todo';

function App() {
  
  const [todos, setTodos] = useState([]);
  console.log(...todos);

  const addNewTodo = (newTodo) => {
    console.log('je suis dans addnewtodo')
    
    newTodo = ([...todos, newTodo] );
    setTodos(newTodo)
  }

  const handleDelete = (id) => {
    console.log('je delete dans handle delete', id)

    const deleteTodo = [...todos].filter(item => item.id !== id)
    setTodos(deleteTodo);
  }
  
  const changeCompleted = (id) => {

      const taskComplete = todos.findIndex(todo => todo.id === id)
      console.log('je suis dans chengecompleted', taskComplete, id)

      const newTaskCompleted = [...todos]

      newTaskCompleted[taskComplete] ={
        ...newTaskCompleted[taskComplete],
        isCompleted: true
    }
    setTodos(newTaskCompleted)
  }

  return (
    <div className='container'>
      <h1>TodoList</h1>
      <Header todoObject={addNewTodo} />
      <Todo todos={todos} handleDelete={handleDelete} changeCompleted={changeCompleted} />
    </div>
  );
}

export default App;
