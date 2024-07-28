import "./App.css";
import Heading from "./components/Heading";
import InputArea from "./components/InputArea";
import TodoComp from "./components/TodoComp";

function App() {
  return (
    <>
      <center>
        <Heading/>

        <InputArea/>

        <TodoComp/>
        <TodoComp/>
        <TodoComp/>
        <TodoComp/>

      </center>

    </>
  );
}

export default App;
