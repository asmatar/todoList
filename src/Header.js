import React, { useState } from 'react';
import './header.scss';

function Header({todoObject}) {

    const [inputValue, setInputValue] = useState('');
    console.log(inputValue);

    const handleTodo = (event) => {
        event.preventDefault();
        console.log('je suis dans handle todo')
        todoObject({
            id: Math.floor(Math.random() * 100),
            text: inputValue
        })
        setInputValue('')
    }

    return (
        <div className='input-data'>
            <form onSubmit={handleTodo}
            >
            <label htmlFor="totodo"> What do you have to do ?</label>
            <input 
            type="text" 
            id='totodo' 
            required 
            value={inputValue}
            onChange={(event)=>setInputValue(event.target.value)}
            />
            <button type='submit'> click to push it !</button>
        </form>
        </div>
    )
}

export default Header
