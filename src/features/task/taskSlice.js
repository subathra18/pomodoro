import { createSlice } from "@reduxjs/toolkit";

let count = 1;

const initialState = {
  taskList: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    add: (state, { payload }) => {
      let { id, data, status } = payload;
      let item = { id: id ? id : count++, task: data, status: status };
      state.taskList.push(item);
    },
    edit: (state, { payload }) => {
      const { id, data, status } = payload;
      const taskItem = state.taskList.find((item) => {
        return item.id == id;
      });
      taskItem.task = data;
      taskItem.status = status;
    },
    remove: (state, { payload }) => {
      const { id } = payload;
      state.taskList = state.taskList.filter((item) => {
        return item.id != id;
      });
    },
  },
});

export const { add, edit, remove } = taskSlice.actions;
export default taskSlice.reducer;
