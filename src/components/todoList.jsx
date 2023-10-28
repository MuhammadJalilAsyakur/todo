import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "./todoProvider";

function TodoList() {
    const { todos, setTodos } = useContext(TodoContext);
    const [inputText, setInputText] = useState("");
    const [editingTodo, setEditingTodo] = useState(null);

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, [setTodos]);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function handleInput(e) {
        setInputText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (editingTodo) {
            const updatedTodos = todos.map((todo) =>
                todo.id === editingTodo.id ? { ...todo, text: inputText } : todo
            );
            setTodos(updatedTodos);
            setEditingTodo(null);
        } else {
            const newTodo = {
                id: todos.length + 1,
                text: inputText,
                isCompleted: false,
            };
            setTodos([...todos, newTodo]);
        }

        setInputText("");
    }

    function handleEdit(todo) {
        setInputText(todo.text);
        setEditingTodo(todo);
    }


    function handleUpdate() {
        // Fungsi handleUpdate dipanggil saat tombol Update ditekan
        handleSubmit({ preventDefault: () => { } }); // Panggil handleSubmit untuk menyimpan perubahan
    }


    function handleDelete(todo) {
        const updatedTodos = todos.filter((tod) => tod.id !== todo.id);
        setTodos(updatedTodos);
        setEditingTodo(null);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInput}
                    key="todoInput"
                    className="border-[1px]
                    border-gray-400 rounded
                    w-48 h-10"
                />
                <button type="submit" 
                className="border-[1px]
                bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                > {editingTodo ? 'Update Todo' : 'Add Todo'}
                </button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <div key={todo.id} className="w-[500px] flex justify-between">
                        <span className="border-red-300 border-2">{todo.text}</span>
                        <div>
                            <button onClick={() => handleEdit(todo)}
                            className="border-[1px]  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                            >✏️</button>
                            <button onClick={() => handleDelete(todo)}
                            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">❎</button>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
