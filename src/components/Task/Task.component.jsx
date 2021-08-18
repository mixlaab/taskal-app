import React from "react";
import "./Task.styles.scss";

const Task = ({ title }) => {
  return (
    <div className={"task"}>
      <div className={"task-main"}>
        <input className={"task-cb"} type="checkbox" />
        <label className={"task-title"}>{title}</label>
      </div>

      <div className={"task-buttons"}>
        <div className="delete icon">
          <div className="tooltip">Delete</div>
          <span>
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
