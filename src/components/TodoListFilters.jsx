// TodoListFilters.jsx
import React from "react";

function TodoListFilters({ filter, setFilter }) {
    return (
        <div className="flex gap-6 mx-2">
            <button className={`border-[1px] text-amber-300 bg-sky-900 rounded-md p-3 w-full items-center  ${filter === 'all' ? 'bg-gray-300' : ''}`} onClick={() => setFilter("all")}>All</button>
            <button className={`border-[1px] text-amber-300 bg-sky-900 rounded-md p-3 w-full items-center  ${filter === 'active' ? 'bg-gray-300' : ''}`} onClick={() => setFilter("active")}>Active</button>
            <button className={`border-[1px] text-amber-300 bg-sky-900 rounded-md p-3 w-full items-center  ${filter === 'completed' ? 'bg-gray-300' : ''}`} onClick={() => setFilter("completed")}>Completed</button>
        </div>
    );
}

export default TodoListFilters;