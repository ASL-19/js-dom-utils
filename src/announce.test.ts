import { afterEach, beforeEach, expect, test, vi } from "vitest";

import announce from "./announce.js";

const getContainer = (priority: "assertive" | "polite") =>
  document.getElementById(`asl19-${priority}-announcements`);

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
  document.body.innerHTML = "";
});

test("creates a hidden live region container", () => {
  announce({ priority: "polite", text: "Hello" });

  const container = getContainer("polite");

  expect(container?.getAttribute("aria-live")).toBe("polite");
  expect(container?.getAttribute("role")).toBe("log");
  expect(container?.style.position).toBe("absolute");
});

test("delays the first announcement, then removes it after 3 seconds", () => {
  announce({ priority: "polite", text: "Hello" });

  const container = getContainer("polite");

  expect(container?.textContent).toBe("");

  vi.advanceTimersByTime(100);

  expect(container?.textContent).toBe("Hello");

  vi.advanceTimersByTime(3000);

  expect(container?.textContent).toBe("");
});

test("announces immediately if the container already exists", () => {
  announce({ priority: "assertive", text: "First" });
  vi.advanceTimersByTime(100);

  announce({ priority: "assertive", text: "Second" });

  expect(getContainer("assertive")?.textContent).toBe("FirstSecond");
});

test("uses separate containers for each priority", () => {
  announce({ priority: "assertive", text: "Assertive" });
  announce({ priority: "polite", text: "Polite" });
  vi.advanceTimersByTime(100);

  expect(getContainer("assertive")?.textContent).toBe("Assertive");
  expect(getContainer("polite")?.textContent).toBe("Polite");
});

test("inserts text rather than HTML", () => {
  announce({ priority: "polite", text: "<b>Bold</b>" });
  vi.advanceTimersByTime(100);

  const container = getContainer("polite");

  expect(container?.querySelector("b")).toBeNull();
  expect(container?.textContent).toBe("<b>Bold</b>");
});
