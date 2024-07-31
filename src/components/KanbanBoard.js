// Importing necessary dependencies and components
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTasks } from "../redux/tasksSlice";
import Column from "./Column";
import TaskForm from "./TaskForm";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// KanbanBoard component
const KanbanBoard = () => {
  const dispatch = useDispatch(); // Dispatch hook to send actions
  const tasks = useSelector((state) => state.tasks.tasks); // Selector to get tasks from the Redux store
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [showForm, setShowForm] = useState(false); // State to control task form visibility

  // Effect to load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    dispatch(setTasks(storedTasks)); // Dispatching setTasks action to initialize the state
  }, [dispatch]);

  // Effect to update localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Filtering tasks based on the search term
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Columns configuration for the Kanban board
  const columns = {
    "To Do": "TO_DO",
    "In Progress": "IN_PROGRESS",
    "Peer Review": "PEER_REVIEW",
    Done: "DONE",
  };

  // Function to get tasks for a specific column
  const getColumnTasks = (column) =>
    filteredTasks.filter((task) => task.column === column);

  return (
    <DndProvider backend={HTML5Backend}>
      {" "}
      {/* Setting up drag-and-drop provider */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search Tasks..."
          className="border p-2 w-[70%]  mb-4 rounded-full"
          onChange={(e) => setSearchTerm(e.target.value)} // Updating search term state on input change
        />
        <button
          className="fixed w-[25%] right-4 md:mr-3 bg-blue-500 text-white p-1 md:p-2 md:px-4  rounded-full shadow-lg"
          onClick={() => setShowForm(true)} // Showing the task form on button click
        >
          <span className="hidden md:inline">ADD TASK</span> +
        </button>
        {showForm && <TaskForm onClose={() => setShowForm(false)} />}{" "}
        {/* Conditional rendering of task form */}
        <div className="flex flex-col md:flex-row gap-4">
          {Object.entries(columns).map(([title, column]) => (
            <Column
              key={column}
              title={title}
              tasks={getColumnTasks(column)} // Getting tasks for the current column
              column={column}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;
