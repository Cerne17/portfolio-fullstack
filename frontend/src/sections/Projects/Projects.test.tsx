import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

// Mock the data to avoid dependency on actual data file
jest.mock("../../data/projects", () => {
  return {
    __esModule: true,
    default: [
      {
        id: 1,
        title: "Test Project",
        description: "Test Description",
        techStack: ["React"],
        demoUrl: "https://demo.com",
        repoUrl: "https://repo.com",
        image: "history.png",
      },
    ],
    projectSkills: {
      "React": { icon: () => <div>Icon</div>, stack: "frontend" },
    },
  };
});

// Mock the image import
jest.mock("../../assets/history.png", () => "history.png");

describe("Projects Component", () => {
  test("renders projects section title", () => {
    render(<Projects />);
    const titleElement = screen.getByText(/My Projects/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders project card with details", () => {
    render(<Projects />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  test("renders project links", () => {
    render(<Projects />);
    expect(screen.getByText("Live Demo").closest("a")).toHaveAttribute(
      "href",
      "https://demo.com"
    );
    expect(screen.getByText("Source Code").closest("a")).toHaveAttribute(
      "href",
      "https://repo.com"
    );
  });
});
