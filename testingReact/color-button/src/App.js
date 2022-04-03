import { useState } from "react";
import "./App.css";

const App = () => {
  const [buttonColor, setButtonColor] = useState("red");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const onCheckboxChange = (event) => {
    setButtonDisabled(event.target.checked);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonDisabled ? "gray" : buttonColor }}
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
        disabled={buttonDisabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={buttonDisabled}
        aria-checked={buttonDisabled}
        onChange={onCheckboxChange}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
};

export default App;
