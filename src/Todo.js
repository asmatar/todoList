import React, { useState } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import './todo.scss';

function Todo({todos, handleDelete, changeCompleted}) {

    const[ editTodo, setEditTodo] = useState(null)
    const[ editingText, setEditingText] = useState('')

    return (
        <div className='todo-container'>
           
            {
                todos.map((todo) => {
                    return (
                        <div key={todo.id} className={ todo.isCompleted === true ? 'completed' : 'todo'}> 
                            {
                                editTodo === todo.id ? (<input type="text" onChange={event => setEditingText(event.target.value)} value={editingText}/>) : (<div className='text'>{todo.text} </div>)
                            }
                            
                            
                            <div className='icons'>  
                                <input type="checkbox" onClick={ () => changeCompleted(todo.id) } />
                                <span className='span' onClick={() => handleDelete(todo.id)}><FaTrash /></span>
                                <span className='span' onClick={() => setEditTodo(todo.id)} ><FaEdit /></span>
                            </div>
                        </div>
                    )
                })
            }
       </div>
       
    )
}

export default Todo
