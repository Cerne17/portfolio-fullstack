import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "./Projects";
import { LanguageProvider } from "../../context/LanguageContext";

// Mock the data to avoid dependency on actual data file
jest.mock("../../data/techStack", () => {
  return {
    __esModule: true,
    projectSkills: {
      "React": { icon: () => <div>Icon</div>, stack: "frontend" },
    },
  };
});

// Mock LanguageContext
jest.mock("../../context/LanguageContext", () => ({
  useLanguage: () => ({
    translations: {
      projects: {
        title: "My Projects",
        viewCode: "Source Code",
        viewDemo: "View Demo",
        list: [
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
      },
    },
  }),
  LanguageProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

// Mock the image import
jest.mock("../../assets/history.png", () => "history.png");

describe("Projects Component", () => {
  test("renders projects section title", () => {
    render(
      <LanguageProvider>
        <Projects />
      </LanguageProvider>
    );
    const titleElement = screen.getByText(/My Projects/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders project card with details", () => {
    render(
      <LanguageProvider>
        <Projects />
      </LanguageProvider>
    );
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  test("renders project links", () => {
    render(
      <LanguageProvider>
        <Projects />
      </LanguageProvider>
    );
    expect(screen.getByText("View Demo").closest("a")).toHaveAttribute(
      "href",
      "https://demo.com"
    );
    expect(screen.getByText("Source Code").closest("a")).toHaveAttribute(
      "href",
      "https://repo.com"
    );
  });
});
