import React, { useState } from "react";
import { useTasks } from "../store/taskContext";

const TaskInput = () => {
  const { tasks, setTasks } = useTasks();
  const [text, setText] = useState("");

  const addTask = () => {
    if (!text.trim()) return; // prevent empty task
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask(); // add task when Enter is pressed
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyPress}  // <-- new line
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
