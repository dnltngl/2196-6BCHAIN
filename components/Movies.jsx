import React from "react";
import ReactDOM from "react-dom/client";

class Movies extends React.Component {
  render() {
    return (
      <>
        <h1>MOVIES</h1>
        <ul>
          <li>Super Man</li>
          <li>Iron Man</li>
          <li>Spiderman</li>
        </ul>
      </>
    );
  }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Movies />);

export default Movies;
