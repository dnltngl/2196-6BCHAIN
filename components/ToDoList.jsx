import React from "react";
import ReactDOM from "react-dom/client";

class ToDoList extends React.Component {
  render() {
    return (
      <>
         <h1>To Do</h1>
        <ul>
          <li>Clean Car</li>
          <li>Wash Dishes</li>
          <li>Review</li>
        </ul>
      </>
    );
  }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<ToDoList />);

export default ToDoList;
