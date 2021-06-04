import React from 'react';
import './todo.scss';

function Todo({todos}) {
    return (
        <div className='todo-container'>
            {
                todos.map((todo) => {
                    return <div key={todo.id} className='todo'> {todo.text}</div>
                })
            }
       </div>
    )
}

export default Todo
