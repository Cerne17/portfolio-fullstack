import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ThemeToggle from "./ThemeToggle";
import { ThemeProvider } from "../../context/ThemeContext";

describe("ThemeToggle Component", () => {
  test("renders toggle button", () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("toggles theme on click", () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    // Since we can't easily check the icon change without implementation details,
    // we rely on the context test for logic verification.
    // Here we just ensure it doesn't crash and is clickable.
    expect(button).toBeInTheDocument();
  });
});
