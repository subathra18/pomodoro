import React from "react";
import TaskForm from "./TaskForm";

const MobileTaskList = () => {
  const [listStatus, setListStatus] = React.useState("closed");
  const toggleList = () => {
    if (listStatus == "closed") {
      document.getElementById("MobileTaskList").classList.remove("hideList");
      setListStatus("open");
    } else {
      document.getElementById("MobileTaskList").classList.add("hideList");
      setListStatus("closed");
    }
  };
  return (
    <div className="lg:hidden">
      <div className="flex flex-col justify-center items-center pt-10">
        <div className="btn uppercase">Add task</div>
        <div id="MobileTaskList" className="taskList">
          <TaskForm></TaskForm>
        </div>
      </div>
    </div>
  );
};

export default MobileTaskList;
