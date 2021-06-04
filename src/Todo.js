import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import './todo.scss';
function Todo({todos}) {
    return (
        <div className='todo-container'>
            {
                todos.map((todo) => {
                    return (
                        <div key={todo.id} className='todo'> 
                            {todo.text} 
                            <div className='icons'>
                                <span><FaTrash /></span>
                                <span><FaEdit/></span>
                            </div>
                        </div>
                    )
                })
            }
       </div>
    )
}

export default Todo
