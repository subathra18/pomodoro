import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { edit, remove } from "../features/task/taskSlice";

const TaskListItem = ({ item }) => {
  const { task, id } = item;
  const [input, setInput] = React.useState(task);
  const [checked, setChecked] = React.useState(false);
  const [isEdited, setIsEdited] = React.useState(false);
  const dispatch = useDispatch();
  const handleEdit = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEdited(false);
    dispatch(edit({ id: id, data: input }));
  };

  const handleDelete = () => {
    dispatch(remove({ id: id }));
  };

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const handleChecked = () => {
    dispatch(edit({ ...item, status: !checked }));
    toggleChecked();
  };

  return (
    <li key={id}>
      <form className="flex gap-3 justify-between" onSubmit={handleSubmit}>
        <input
          type="checkbox"
          onChange={handleChecked}
          checked={checked}
          className="checkbox"
        />
        <input
          type="text"
          className="input w-full max-w-xs bg-base-100"
          readOnly={!isEdited}
          disabled={!isEdited}
          value={input}
          onChange={handleEdit}
        />
        <div className="flex justify-end gap-3">
          <MdOutlineEdit
            onClick={() => {
              setIsEdited(true);
            }}
          ></MdOutlineEdit>
          <MdDelete onClick={handleDelete}></MdDelete>
        </div>
      </form>
    </li>
  );
};

export default TaskListItem;
