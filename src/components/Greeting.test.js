import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// create testing suite - first arg is description, second arg is arrow functions holding different tests
describe("Greeting component", () => {
  test("renders Hello person as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // in thise case - nothing

    // Assert
    const helloPersonElement = screen.getByText("Hello person!");
    expect(helloPersonElement).toBeInTheDocument();
  });

  test("renders good to see you if button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    //Assert
    const outputElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders Changed! if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render good to see you if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
