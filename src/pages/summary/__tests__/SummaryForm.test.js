import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

describe("checkbox and button state", () => {
  test("initial renders", () => {
    render(<SummaryForm />);
    const termsCheckbox = screen.getByRole("checkbox", {
      name: /I agree to Terms and Conditions/i,
    });
    const orderButton = screen.getByRole("button", { name: /Confirm Order/i });

    expect(termsCheckbox).not.toBeChecked();
    expect(orderButton).toBeDisabled();
  });

  test("order button state changes based on checkbox click", () => {
    render(<SummaryForm />);
    const termsCheckbox = screen.getByRole("checkbox", {
      name: /I agree to Terms and Conditions/i,
    });
    const orderButton = screen.getByRole("button", { name: /Confirm Order/i });

    userEvent.click(termsCheckbox);
    expect(orderButton).toBeEnabled();
    userEvent.click(termsCheckbox);
    expect(orderButton).toBeDisabled();
  });
});

describe("test popover", () => {
  test("popover renders correctly, shows/hides on hover/unhover", async () => {
    render(<SummaryForm />);
    const tclink = screen.getByText(/terms and conditions/i);
    const nullPopover = screen.queryByText(/no icecream will be delivered/i);

    // popover not visible initially
    expect(nullPopover).not.toBeInTheDocument();

    // popover visible on hover
    userEvent.hover(tclink);
    const popover = screen.getByText(/no icecream will be delivered/i);
    expect(popover).toBeInTheDocument();

    // popover not visible on unhover
    userEvent.unhover(tclink);
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/no icecream will be delivered/i)
    );
  });
});
