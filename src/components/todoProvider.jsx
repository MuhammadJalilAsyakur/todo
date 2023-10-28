import React, { useState } from 'react'
import { createContext } from 'react'
import TodoList from './todoList'
export const TodoContext = createContext()

function TodoProvider() {
    const [todos, setTodos] = useState([])
    return (
        <TodoContext.Provider value={ {todos, setTodos} }>
            <TodoList />
        </TodoContext.Provider>
    )
}

export default TodoProvider
