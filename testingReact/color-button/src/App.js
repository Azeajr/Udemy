import { useState } from "react";
import "./App.css";

export const replaceCamelWithSpace = (ColorName) => {
  return ColorName.replace(/\B([A-Z])\B/g, ' $1')
};

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
