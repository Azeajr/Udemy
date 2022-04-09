import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

describe("Checkbox starts unchecked, checkbox enables button, un-checking disables button", () => {
  test("Checkbox is unchecked by and button is disabled by default", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions",
    });
    expect(checkbox).not.toBeChecked();
    const confirmOrderButton = screen.getByRole("button", {
      name: "Confirm order",
    });
    expect(confirmOrderButton).toBeDisabled();
  });

  test("Checkbox enables button on first click and disables on subsequent click", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions",
    });
    const confirmOrderButton = screen.getByRole("button", {
      name: "Confirm order",
    });

    await user.click(checkbox);
    expect(confirmOrderButton).toBeEnabled();
  });

  test("Un-checking checkbox again disables button", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions",
    });
    const confirmOrderButton = screen.getByRole("button", {
      name: "Confirm order",
    });

    await user.click(checkbox);
    expect(confirmOrderButton).toBeEnabled();
    await user.click(checkbox);
    expect(confirmOrderButton).toBeDisabled();
  });

  test("popover responds to hover", () => {
    // popover starts out hidden

    // popover appears upon mouseover of checkbox label

    // popover disappears when we mouse out

  });
});
