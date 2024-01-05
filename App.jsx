import Hello from "./components/Hello";
import ToDoList from "./components/ToDoList";
import Welcome from "./components/Welcome";
import Movies from "./components/Movies";
import Books from "./components/Books";

function App() {
  return (
    <>
      <Welcome />
      <Hello title="I think I've done it" />
      <ToDoList />
      <Movies />
      <Books />
    </>
  );
}

export default App;