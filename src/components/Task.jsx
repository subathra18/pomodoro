import React from "react";
import { CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { add, edit } from "../features/task/taskSlice";
const Task = () => {
  const state = useSelector((state) => state.tasks);
  const firstTask =
    state.taskList &&
    state.taskList.find((item) => {
      return item.id == 0;
    });

  const dispatch = useDispatch();
  const [input, setInput] = React.useState(firstTask || "");
  const [edited, isEdited] = React.useState(false);

  const handleEdit = (e) => {
    e.preventDefault();

    if (input) {
      if (firstTask) {
        dispatch(edit({ id: 0, data: input }));
      } else {
        dispatch(add({ id: 0, data: input }));
      }
    }
  };
  return (
    <div className="flex flex-col mt-4 justify-center uppercase items-center">
      <div className="text-xl">current task</div>
      <form onSubmit={handleEdit}>
        <label className="mt-4 input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow "
            readOnly={!isEdited}
            disabled={!isEdited}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <CiEdit></CiEdit>
        </label>
      </form>
    </div>
  );
};

export default Task;
