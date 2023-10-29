
import React, { useState } from "react";

function TodoInput({ setTodos, editingTodo, setEditingTodo }) {
    const [inputText, setInputText] = useState("");

    function handleInput(e) {
        setInputText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!inputText) {
            return alert('Todo cannot be empty')
        }

        if (editingTodo) {
            const updatedTodos = setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === editingTodo.id ? { ...todo, text: inputText } : todo
                )
            );
            setEditingTodo(null);
        } else {
            setTodos((prevTodos) => [
                ...prevTodos,
                {
                    id: prevTodos.length + 1,
                    text: inputText,
                    isCompleted: false,
                },
            ]);
        }

        setInputText("");
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex items-center">
            <input
                type="text"
                value={inputText}
                onChange={handleInput}
                className=" border-gray-400 rounded w-9/12 h-10"
            />
            <button
                type="submit"
                className=" bg-blue-500 hover:bg-blue-700 text-white font-semibold p-2 w-1/4  rounded"
            >
                {editingTodo ? 'Update Todo' : 'Add Todo'}
            </button>
        </form>
    );
}

export default TodoInput;
