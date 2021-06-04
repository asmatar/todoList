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

  return (
    <div className='container'>
      <h1>TodoList</h1>
      <Header todoObject={addNewTodo} />
      <Todo todos={todos}/>
    </div>
  );
}

export default App;
