import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <h2 className="TodoCounter">You have been completed {completed} of {total} TODOS</h2>
    );
}

export { TodoCounter };
