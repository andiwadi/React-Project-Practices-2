// components/Todo.js
import React, { useState } from 'react';

const Todo = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputValue) return; // Prevent adding empty todo
        setTodos([...todos, inputValue]);
        setInputValue(''); // Clear input
    };

    const handleDelete = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Add a new todo..."
                    style={{ width: '70%', padding: '10px', marginRight: '10px' }}
                />
                <button type="submit" style={{ padding: '10px' }}>Add Todo</button>
            </form>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {todos.map((todo, index) => (
                    <li key={index} style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{todo}</span>
                        <button onClick={() => handleDelete(index)} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
