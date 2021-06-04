import React, { useState } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import './todo.scss';
// EDITING TODO
// we need setTodos from APP
function Todo({todos, handleDelete, changeCompleted, setTodos}) {
    // this is the todo (with the id) updating 
    const[ todoEditing, setTodoEditing] = useState(null)
    // this is the new value from the input. new thing to do
    const[ editingText, setEditingText] = useState('')

    // 5. we map into all todos, we we found the same todo as the id, we change the property text into the value in editingText, and return the todo
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
                        {/* 2. if todoEditing exist, it means that a todo have been updating.
                        So we change the render to show an input to write down the new thing to do. 
                        if not, we show the normal todo  */}
                            {
                                todoEditing === todo.id ? 
                                // 3 . we catch the value updating and put it into the state
                                (<input type="text" onChange={event => setEditingText(event.target.value)} value={editingText}/>) 
                                : 
                                (<div className='text'>{todo.text} </div>)
                            }
                             {
                                 todoEditing === todo.id ? 
                                //  4 . button to submit the new todo, callback editTodo (with the id)
                                 (<button onClick={event => {editTodo(todo.id)}} >validate </button>) 
                                 :
                                 (   <div className='icons'>  
                                <input type="checkbox" onClick={ () => changeCompleted(todo.id) } />
                                <span className='span' onClick={() => handleDelete(todo.id)}><FaTrash /></span>
                                {/* 1. on click we callback the function catching the id, we put it into the state (todoEditing) */}
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
