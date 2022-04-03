import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton.textContent).toBe("Change to red");
});

test("Button and checkbox initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox");

  // expect(checkbox).not.toBeChecked();
  fireEvent.click(checkbox);
  // expect(checkbox).toBeChecked();
  expect(colorButton).not.toBeEnabled();
  
  fireEvent.click(checkbox);
  // expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});
