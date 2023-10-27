import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "./todoProvider";

function TodoList() {
    const { todos, setTodos } = useContext(TodoContext)
    const [inputText, setInputText] = useState("")

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
    }, [setTodos]);

    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    function handleInput(e) {
        setInputText(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();

        const newTodo = {
            id: todos.length + 1,
            text: inputText,
            isCompleted: false,
        };

        setTodos([...todos, newTodo]);
        setInputText('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInput}
                    key="todoInput"
                />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <p key={todo.id}>{todo.text}</p>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
