import React from "react";
import ReactDOM from "react-dom/client";

class Welcome extends React.Component {
render() {
return <h2>I think i've done it</h2>;
}
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Welcome />);

export default Welcome;