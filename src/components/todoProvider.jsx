import React, { useState } from 'react'
import { createContext } from 'react'
import TodoList from './todoList'
export const TodoContext = createContext()

function TodoProvider() {
    const [todos, setTodos] = useState([
        {id: 1, text: "Learn React", isCompleted: false},
        {id: 2, text: "Learn React Native", isCompleted: false},
    ])
    return (
        <TodoContext.Provider value={ {todos, setTodos} }>
            <TodoList />
        </TodoContext.Provider>
    )
}

export default TodoProvider
