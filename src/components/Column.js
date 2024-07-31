// Importing necessary dependencies and components
import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { moveTask } from "../redux/tasksSlice";
import TaskCard from "./TaskCard";

// Column component
const Column = ({ title, tasks, column }) => {
  const dispatch = useDispatch(); // Dispatch hook to send actions

  // Setting up drop target for drag-and-drop functionality
  const [, drop] = useDrop({
    accept: "TASK", // Accepting items of type "TASK"
    drop: (item) =>
      dispatch(moveTask({ taskId: item.id, targetColumn: column })), // Dispatching moveTask action on drop
    collect: (monitor) => ({
      isOver: !!monitor.isOver(), // Collecting isOver state from monitor
    }),
  });

  return (
    <div
      ref={drop} // Ref for the drop target
      className="bg-gray-100 p-4 rounded w-full md:w-1/4 flex flex-col"
    >
      <h2 className="font-bold text-xl mb-4">{title}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} /> // Rendering TaskCard component for each task
      ))}
    </div>
  );
};

export default Column;
