import React from "react";

import TaskList from "./TaskList";
import { useDispatch } from "react-redux";
import { add } from "../features/task/taskSlice";

const TaskForm = () => {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(add({ data: input, status: false }));
    }
  };
  return (
    <div>
      <div className="menu rounded-xl bg-brown p-4  mr-2 text-base-content">
        <form onSubmit={addTask}>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button type="submit" className="btn btn-ghost uppercase">
              ADD TASK
            </button>
          </label>
        </form>
        <TaskList></TaskList>
      </div>
    </div>
  );
};

export default TaskForm;
