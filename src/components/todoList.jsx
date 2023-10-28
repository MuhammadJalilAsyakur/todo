import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "./todoProvider";

function TodoList() {
    const { todos, setTodos } = useContext(TodoContext);
    const [inputText, setInputText] = useState("");
    const [editingTodo, setEditingTodo] = useState(null);

    // Mengambil data dari localStorage saat komponen dimuat
    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, [setTodos]);

    // Menyimpan data ke localStorage setiap kali todos berubah
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function handleInput(e) {
        setInputText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (editingTodo) {
            // Update todo jika sedang dalam mode edit
            const updatedTodos = todos.map((todo) =>
                todo.id === editingTodo.id ? { ...todo, text: inputText } : todo
            );
            setTodos(updatedTodos);
            setEditingTodo(null);
        } else {
            // Tambahkan todo baru jika tidak dalam mode edit
            const newTodo = {
                id: todos.length + 1,
                text: inputText,
                isCompleted: false,
            };
            setTodos([...todos, newTodo]);
        }

        setInputText("");
    }

    function handleEdit (todo) {
        setInputText(todo.text);
        setEditingTodo (todo);
    }

    
  function handleUpdate() {
    // Fungsi handleUpdate dipanggil saat tombol Update ditekan
    handleSubmit({ preventDefault: () => {} }); // Panggil handleSubmit untuk menyimpan perubahan
  }

  
  function handleDelete(todo) {
    const updatedTodos = todos.filter((t) => t.id !== todo.id);
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
                    className="border-[1px]"
                />
                <button type="submit"> {editingTodo ? 'Update Todo' : 'Add Todo'}
            </button>
            </form>
            <ul className="w-48">
                {todos.map((todo) => (
                    <div key={todo.id} className="flex justify-between border-[1px]">
                        <span>{todo.text}</span>
                        <div>
                            <button onClick={() => handleEdit (todo) }>✏️</button>
                            <button onClick={() => handleDelete(todo)}>❎</button>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
