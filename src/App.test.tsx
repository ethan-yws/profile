import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the screenshot-style portfolio structure", () => {
    window.localStorage.clear();
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /Ethan\s*Shi/,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "I'm a front-end developer who wants to help make the internet a more creative, accessible, and better place.",
      ),
    ).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: "Work" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Experiments" }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText("LinkedIn")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/ethan-shi-007b85162/",
    );
    expect(screen.getByLabelText("Email")).toHaveAttribute(
      "href",
      "mailto:y.ethan.shi@gmail.com",
    );
  });

  it("renders placeholder content for work cards and experiments", () => {
    render(<App />);

    expect(screen.getAllByText("Replace with project")).toHaveLength(4);
    expect(screen.getByText("Project Placeholder 01")).toBeInTheDocument();
    expect(screen.getAllByText(/Experiment Placeholder/)).toHaveLength(3);
    expect(screen.getAllByText(/Add year/)).toHaveLength(3);
  });

  it("switches between light, dark, and device themes", () => {
    window.localStorage.clear();
    render(<App />);

    const root = document.documentElement;
    const switchButton = screen.getByRole("button", {
      name: "Theme: dark. Switch to device.",
    });

    expect(root.dataset.theme).toBe("dark");
    expect(root.dataset.themePreference).toBe("dark");

    fireEvent.click(switchButton);
    expect(root.dataset.themePreference).toBe("device");
    expect(screen.getByRole("button", { name: "Theme: device. Switch to light." })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Theme: device. Switch to light." }));
    expect(root.dataset.theme).toBe("light");
    expect(root.dataset.themePreference).toBe("light");

    fireEvent.click(screen.getByRole("button", { name: "Theme: light. Switch to dark." }));
    expect(root.dataset.theme).toBe("dark");
    expect(root.dataset.themePreference).toBe("dark");
    expect(window.localStorage.getItem("profile-theme-preference")).toBe("dark");
  });
});
