import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import './todo.scss';

function Todo({todos, handleDelete, changeCompleted}) {
  
    return (
        <div className='todo-container'>
           
            {
                todos.map((todo) => {
                    return (
                        <div key={todo.id} className={ todo.isCompleted === true ? 'completed' : 'todo'}> 
                            <div className='text'>{todo.text} </div>
                            <div className='icons'>  
                            <input type="checkbox" onClick={ () => changeCompleted(todo.id) } />
                                <span className='span' onClick={() => handleDelete(todo.id)}><FaTrash /></span>
                                <span className='span' 
                                // onClick={() => changeCompleted(todo.id)}
                                ><FaEdit /></span>
                            </div>
                        </div>
                    )
                })
            }
       </div>
       
    )
}

export default Todo
