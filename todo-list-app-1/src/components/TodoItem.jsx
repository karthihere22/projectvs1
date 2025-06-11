import React from 'react';

const TodoItem = ({ todo, onToggle }) => {
    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={onToggle} 
            />
            <span>{todo.text}</span>
        </div>
    );
};

export default TodoItem;