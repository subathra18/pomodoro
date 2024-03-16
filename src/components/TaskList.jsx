import React from "react";
import TaskListItem from "./TaskListItem";
import { useSelector } from "react-redux";

const TaskList = () => {
  const state = useSelector((state) => state.tasks);
  console.log("state.tasks", state.tasks);
  const { taskList } = state;
  return (
    <ul className="py-3">
      {taskList.map((item) => {
        return <TaskListItem key={item.id} item={item}></TaskListItem>;
      })}
    </ul>
  );
};

export default TaskList;
