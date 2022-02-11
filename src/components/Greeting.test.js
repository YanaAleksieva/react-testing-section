import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders Hello person as a text", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // in thise case - nothing

  // Assert
  const helloPersonElement = screen.getByText("Hello person", { exact: false });
  expect(helloPersonElement).toBeInTheDocument();
});
