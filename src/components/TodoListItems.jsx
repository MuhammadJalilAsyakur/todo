import React from "react";
import { Icon } from "@iconify/react";

function TodoListItems({ todos, handleCheckboxChange, handleEdit, handleDelete }) {
    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id} className="w-full flex items-center font-bold space-y-3 border-b-[1px]  justify-between">
                    <div>
                        <input
                            type="checkbox"
                            checked={todo.isCompleted}
                            onChange={() => handleCheckboxChange(todo)}
                        />
                        <span className={`text-left ml-6 text-amber-500 ${todo.isCompleted ? 'line-through' : ''}`}>
                            {todo.text}
                        </span>
                    </div>
                    <div className="space-x-3">
                        <button onClick={() => handleEdit(todo)}
                            className=" hover:bg-blue-700 text-emerald-300 font-bold py-2 px-4 rounded"
                        ><Icon icon="line-md:cog-filled-loop" /></button>
                        <button onClick={() => handleDelete(todo)}
                            className="bg-red-600 hover-bg-red-700 font-bold py-2 px-4 rounded">❎</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TodoListItems;