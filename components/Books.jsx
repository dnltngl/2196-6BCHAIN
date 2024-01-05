import React from "react";
import ReactDOM from "react-dom/client";

class Books extends React.Component {
  render() {
    return (
      <>
        <h1>Books</h1>
        <ul>
          <li>Berserk</li>
          <li>Berserk Glutonny</li>
          <li>Cruel Prince</li>
        </ul>
      </>
    );
  }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Books />);

export default Books;
