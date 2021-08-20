import React from "react";
import "./Task.styles.scss";

const Task = ({ id, title, isCompleted, handleRemove, handleCheck }) => {
  return (
    <div className={"task"}>
      <div className={"task-main"}>
        <input
          onChange={() => handleCheck(id)}
          className={"task-cb"}
          type="checkbox"
          checked={isCompleted}
        />
        <label className={"task-title"}>{title}</label>
      </div>

      <div className={"task-buttons"}>
        <div className="delete icon">
          <div className="tooltip">Delete</div>
          <span onClick={() => handleRemove(id)}>
            <i className="fa fa-trash"></i>
          </span>
        </div>
        <div className="details icon">
          <div className="tooltip">Details</div>
          <span>
            <i className="fa fa-ellipsis-v"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Task;
