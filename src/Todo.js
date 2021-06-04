import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import './todo.scss';
function Todo({todos, handleDelete}) {

    
    return (
        <div className='todo-container'>
            {
                todos.map((todo) => {
                    return (
                        <div key={todo.id} className='todo'> 
                            <div className='text'>{todo.text} </div>
                            <div className='icons'>
                                <span onClick={() => handleDelete(todo.id)}><FaTrash /></span>
                                <span><FaEdit /></span>
                            </div>
                        </div>
                    )
                })
            }
       </div>
    )
}

export default Todo
