import React from "react";
import { LuListTodo } from "react-icons/lu";

const Navbar = () => {
  const [listStatus, setListStatus] = React.useState("closed");
  const toggleList = () => {
    if (listStatus == "closed") {
      document.getElementById("taskList").classList.remove("hideList");
      setListStatus("open");
    } else {
      document.getElementById("taskList").classList.add("hideList");
      setListStatus("closed");
    }
  };
  return (
    <div className="navbar bg-brown">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a className=" text-5xl tracking-wide font-extrabold  py-5">POMODORO</a>
      </div>
      <div className="navbar-end">
        <button className=" hidden lg:block btn bg-neutral px-6 ">
          <LuListTodo onClick={toggleList} className="w-5 h-5"></LuListTodo>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
