import "./App.css";
import { Navbar, PomoContainer, Task, TaskForm } from "./components";

function App() {
  return (
    <div className="h-screen bg-[url(tomato.jpeg)] bg-center bg-cover bg-no-repeat ">
      <div className="h-screen bg-brown">
        <Navbar></Navbar>
        <TaskForm></TaskForm>
        <PomoContainer></PomoContainer>
        <Task></Task>
      </div>
    </div>
  );
}

export default App;
