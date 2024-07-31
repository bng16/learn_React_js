import "./App.css";
import Heading from "./components/Heading";
import InputArea from "./components/InputArea";
import TodoComps from "./components/TodoComps";

function App() {

  const todoTestData=[
    {taskName:"hihi",dueDate:"17/09/2001"},
    {taskName:"lolo",dueDate:"17/09/2001"},
    {taskName:"popo",dueDate:"17/09/2001"},
    {taskName:"koko",dueDate:"17/09/2001"},
    {taskName:"toot",dueDate:"17/09/2001"},
    {taskName:"foot",dueDate:"17/09/2001"},
    {taskName:"like",dueDate:"now"},

  ]


  return (
    <>
      <center>
        <Heading/>

        <InputArea/>

        <TodoComps tododata={todoTestData}/>
      </center>

    </>
  );
}

export default App;
