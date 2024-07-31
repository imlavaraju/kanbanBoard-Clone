// Importing necessary dependencies and components
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

// TaskForm component
const TaskForm = ({ onClose }) => {
  const dispatch = useDispatch(); // Dispatch hook to send actions
  const [title, setTitle] = useState(""); // State for task title
  const [description, setDescription] = useState(""); // State for task description

  // Function to handle adding a new task
  const handleAddTask = () => {
    const newTask = {
      id: Date.now(), // Generating a unique id for the new task
      title,
      description,
      column: "TO_DO", // Setting the initial column to "TO_DO"
    };
    dispatch(addTask(newTask)); // Dispatching addTask action
    onClose(); // Closing the task form
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg w-96">
        <h3 className="font-bold text-lg mb-4">Add New Task</h3>
        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Updating title state on input change
        />
        <textarea
          placeholder="Description"
          className="border p-2 w-full mb-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Updating description state on input change
        />
        <div className="flex justify-end">
          <button
            className="bg-gray-300 text-gray-700 p-2 rounded mr-2"
            onClick={onClose} // Closing the task form on cancel
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleAddTask} // Adding the new task on button click
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
