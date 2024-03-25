import React from "react";
import TaskForm from "./TaskForm";

const DesktopTaskList = () => {
  return (
    <div
      id="taskList"
      className="taskList hideList overflow-hidden absolute top-28 right-0 pt-5 w-max h-full"
    >
      <TaskForm></TaskForm>
    </div>
  );
};

export default DesktopTaskList;
