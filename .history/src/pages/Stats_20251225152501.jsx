import React from "react";
import { useTasks } from "../store/taskContext";

const Stats = () => {
  const { tasks } = useTasks();
  const total = tasks.length;

  if (total === 0)
    return (
      <div className="stats-container">
        <h2>Task Statistics</h2>
        <p style={{ textAlign: "center" }}>No tasks yet</p>
      </div>
    );

  const completed = tasks.filter((t) => t.completed).length;
  const remaining = total - completed;
  const pctCompleted = Math.round((completed / total) * 100);
  const pctRemaining = 100 - pctCompleted;

  return (
    <div className="stats-container">
      <h2>Task Statistics</h2>

      <div className="stats-summary">
        <div className="stats-item">
          <div className="icon total">📋</div>
          <div className="meta">Total<br />
            <strong>{total}</strong>
          </div>
        </div>

        <div className="stats-item">
          <div className="icon completed">✅</div>
          <div className="meta">Completed<br />
            <strong>{completed}</strong>
          </div>
        </div>

        <div className="stats-item">
          <div className="icon remaining">⏳</div>
          <div className="meta">Remaining<br />
            <strong>{remaining}</strong>
          </div>
        </div>
      </div>

      <div className="stats-chart" aria-hidden>
        <div className="bar">
          <div className="bar-label">Completed</div>
          <div className="bar-track">
            <div
              className="bar-fill completed"
              style={{ width: `${pctCompleted}%` }}
            />
          </div>
          <div className="bar-percent">{pctCompleted}%</div>
        </div>

        <div className="bar">
          <div className="bar-label">Remaining</div>
          <div className="bar-track">
            <div
              className="bar-fill remaining"
              style={{ width: `${pctRemaining}%` }}
            />
          </div>
          <div className="bar-percent">{pctRemaining}%</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
