import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { moveTask } from "../redux/tasksSlice";
import TaskCard from "./TaskCard";

const Column = ({ title, tasks, column }) => {
  const dispatch = useDispatch();

  const [, drop] = useDrop({
    accept: "TASK",
    drop: (item) =>
      dispatch(moveTask({ taskId: item.id, targetColumn: column })),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className="bg-gray-100 p-4 rounded w-full md:w-1/4 flex flex-col"
    >
      <h2 className="font-bold text-xl mb-4">{title}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;
