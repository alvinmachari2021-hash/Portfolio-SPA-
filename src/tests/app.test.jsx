import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders header", () => {
  render(<App />);
  expect(screen.getByText(/Studio Showcase/i)).toBeInTheDocument();
});

test("adds a new project", () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/Title/i), { target: { value: "Test Project" } });
  fireEvent.change(screen.getByPlaceholderText(/Category/i), { target: { value: "Web" } });
  fireEvent.change(screen.getByPlaceholderText(/Description/i), { target: { value: "Demo description" } });
  fireEvent.click(screen.getByText(/Add Project/i));
  expect(screen.getByText(/Test Project/i)).toBeInTheDocument();
});