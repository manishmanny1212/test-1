import "./app.css";
import Todo from "../src/components/Todo";
function App() {
  return (
    <div>
      <h1>Todo APP</h1>
      <Todo title="first item" />
      <Todo title="second item" />
    </div>
  );
}

export default App;
