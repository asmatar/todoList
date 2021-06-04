import React, { useState } from 'react';
import './header.scss';

function Header({todoObject}) {

    const [inputValue, setInputValue] = useState('');
    console.log(inputValue);

    const handleTodo = (event) => {
        event.preventDefault();

        todoObject({
            id: Math.floor(Math.random() * 1000),
            text: inputValue,
            isCompleted: false
        })
        setInputValue('')
    }

    return (
        <div className='input-data'>
            <form onSubmit={handleTodo}
            >
            <input 
            placeholder='what do you have to do'
            type="text" 
            id='totodo' 
            required 
            value={inputValue}
            onChange={(event)=>setInputValue(event.target.value)}
            
            />
            <button type='submit'> Add me !</button>
        </form>
        </div>
    )
}

export default Header
