import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import announce from "./announce.js";

const getContainer = (priority: "assertive" | "polite") =>
  document.getElementById(`asl19-${priority}-announcements`);

describe("announce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    document.body.innerHTML = "";
  });

  it("creates a hidden live region container", () => {
    announce({ priority: "polite", text: "Hello" });

    const container = getContainer("polite");

    expect(container?.getAttribute("aria-live")).toBe("polite");
    expect(container?.getAttribute("role")).toBe("log");
    expect(container?.style.position).toBe("absolute");
  });

  it("delays the first announcement, then removes it after 3 seconds", () => {
    announce({ priority: "polite", text: "Hello" });

    const container = getContainer("polite");

    expect(container?.textContent).toBe("");

    vi.advanceTimersByTime(100);

    expect(container?.textContent).toBe("Hello");

    vi.advanceTimersByTime(3000);

    expect(container?.textContent).toBe("");
  });

  it("announces immediately if the container already exists", () => {
    announce({ priority: "assertive", text: "First" });
    vi.advanceTimersByTime(100);

    announce({ priority: "assertive", text: "Second" });

    expect(getContainer("assertive")?.textContent).toBe("FirstSecond");
  });

  it("uses separate containers for each priority", () => {
    announce({ priority: "assertive", text: "Assertive" });
    announce({ priority: "polite", text: "Polite" });
    vi.advanceTimersByTime(100);

    expect(getContainer("assertive")?.textContent).toBe("Assertive");
    expect(getContainer("polite")?.textContent).toBe("Polite");
  });

  it("inserts text rather than HTML", () => {
    announce({ priority: "polite", text: "<b>Bold</b>" });
    vi.advanceTimersByTime(100);

    const container = getContainer("polite");

    expect(container?.querySelector("b")).toBeNull();
    expect(container?.textContent).toBe("<b>Bold</b>");
  });
});
