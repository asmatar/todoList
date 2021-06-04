import React, { useState } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import './todo.scss';

function Todo({todos, handleDelete, changeCompleted, setTodos}) {

    const[ todoEditing, setTodoEditing] = useState(null)
    const[ editingText, setEditingText] = useState('')


    const editTodo = (id) => {
      const updatedTodos = [...todos].map(todo => {
          if (todo.id === id) {
              todo.text = editingText
          }
          return todo
      })
      setTodos(updatedTodos);
      setTodoEditing(null)
      setEditingText('')
    }

    return (
        <div className='todo-container'>
           
            {
                todos.map((todo) => {
                    return (
                        <div key={todo.id} className={ todo.isCompleted === true ? 'completed' : 'todo'}> 
                            {
                                todoEditing === todo.id ? (<input type="text" onChange={event => setEditingText(event.target.value)} value={editingText}/>) : (<div className='text'>{todo.text} </div>)
                            }
                             {
                                 todoEditing === todo.id ? (<button onClick={event => {editTodo(todo.id)}} >validate </button>) :
                                 (   <div className='icons'>  
                                <input type="checkbox" onClick={ () => changeCompleted(todo.id) } />
                                <span className='span' onClick={() => handleDelete(todo.id)}><FaTrash /></span>
                                <span className='span' onClick={() => setTodoEditing(todo.id)} ><FaEdit /></span>
                            </div>)
                             }
                            
                         
                        </div>
                    )
                })
            }
       </div>
       
    )
}

export default Todo
