import React from "react";
import { useTasks } from "../store/taskContext";

const Stats = () => {
  const { tasks } = useTasks();
  const completed = tasks.filter((t) => t.completed).length;

  return (
    <div className="stats-container">
      <h2>Task Statistics</h2>
      <p>Total tasks: {tasks.length}</p>
      <p>Completed tasks: {completed}</p>
      <p>Remaining tasks: {tasks.length - completed}</p>
    </div>
  );
};

export default Stats;
