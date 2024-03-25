import "./App.css";
import {
  Navbar,
  PomoContainer,
  Task,
  DesktopTaskList,
  MobileTaskList,
} from "./components";

function App() {
  return (
    <div className="h-screen bg-[url(tomato.jpeg)] bg-center bg-cover bg-no-repeat ">
      <div className="h-screen bg-brown">
        <Navbar></Navbar>
        <DesktopTaskList></DesktopTaskList>
        <PomoContainer></PomoContainer>
        <Task></Task>
        <MobileTaskList></MobileTaskList>
      </div>
    </div>
  );
}

export default App;
