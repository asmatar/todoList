import React, { useState } from 'react';
import './App.scss';
import Header from './Header';
import Todo from './Todo';

function App() {
  
  const [todos, setTodos] = useState([]);
  console.log(...todos);

  const addNewTodo = (newTodo) => {
    // we copy the todo array, and put the new one
    newTodo = ([...todos, newTodo] );
    setTodos(newTodo)
  }


  const handleDelete = (id) => {
    // we filter the todos list, beggining by creating a copy, and return all the todo that don't have the same id
    const deleteTodo = [...todos].filter(item => item.id !== id); 
    setTodos(deleteTodo);
  } 

  
  const changeCompleted = (id) => {
    // we've got the task's id, so we want to stock it in a variable
      const taskComplete = todos.findIndex(todo => todo.id === id)
    // we copy todos to create a new todo list
      const newTaskCompleted = [...todos]
      // for the task that we want to change, we copie it data, but adding is completed
      newTaskCompleted[taskComplete] ={
        ...newTaskCompleted[taskComplete],
        isCompleted: !newTaskCompleted[taskComplete].isCompleted
    }
    // we give the new task list to setTodos to change the state
    setTodos(newTaskCompleted)
  }
  // const setEdit = (id) => {
    
  // }

  return (
    <div className='container'>
      <h1>TodoList</h1>
      <Header todoObject={addNewTodo} />
      <Todo todos={todos} handleDelete={handleDelete} changeCompleted={changeCompleted}
      // setEdit={setEdit}
      />
    </div>
  );
}

export default App;
