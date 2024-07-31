// Importing necessary dependencies and components
import React from "react";
import { useDrag } from "react-dnd";

// TaskCard component
const TaskCard = ({ task }) => {
  // Setting up drag source for drag-and-drop functionality
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK", // Type of draggable item
    item: { id: task.id }, // Item being dragged
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(), // Collecting isDragging state from monitor
    }),
  }));

  return (
    <div
      ref={drag} // Ref for the drag source
      className={`bg-white p-4 rounded shadow-md mb-4 ${
        isDragging ? "opacity-50" : "" // Applying styles based on isDragging state
      }`}
    >
      <h3 className="font-bold text-lg">{task.title}</h3>
      <p className="text-gray-600">{task.description}</p>
    </div>
  );
};

export default TaskCard;
