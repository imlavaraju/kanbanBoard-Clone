import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTasks } from "../redux/tasksSlice";
import Column from "./Column";
import TaskForm from "./TaskForm";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const KanbanBoard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    dispatch(setTasks(storedTasks));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = {
    "To Do": "TO_DO",
    "In Progress": "IN_PROGRESS",
    "Peer Review": "PEER_REVIEW",
    Done: "DONE",
  };

  const getColumnTasks = (column) =>
    filteredTasks.filter((task) => task.column === column);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4">
        <input
          type="text"
          placeholder="Search tasks..."
          className="border p-2 w-[70%] mb-4"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="fixed w-[25%] right-4 mr-3 bg-blue-500 text-white p-2 px-4  rounded-full shadow-lg"
          onClick={() => setShowForm(true)}
        >
          ADD TASK +
        </button>
        {showForm && <TaskForm onClose={() => setShowForm(false)} />}
        <div className="flex flex-col md:flex-row gap-4">
          {Object.entries(columns).map(([title, column]) => (
            <Column
              key={column}
              title={title}
              tasks={getColumnTasks(column)}
              column={column}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;
