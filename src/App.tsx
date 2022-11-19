import React, { useState } from 'react';

const myComponentStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "200px",
  border: "3px solid green",
}
const Button = {
  backgroundColor: "#4CAF50",
  border: "none",
  color: "white",
  padding: "15px 32px",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
}

function App() {

  const [count, setCount] = useState(1);
  const [text, setText] = useState("click me");

  const changeText = () => {

    setCount(count + 1)

    if (count % 3 === 0) {
      setText("bang");
    } else {
      setText("click me");
    }

  }

  return <div style={myComponentStyle}>
    <button style={Button} onClick={changeText}>{text}</button>
  </div>;
}

export default App;
