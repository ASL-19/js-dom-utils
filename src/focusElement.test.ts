import { afterEach, describe, expect, it, vi } from "vitest";

import focusElement from "./focusElement.js";

const createElement = (html: string) => {
  document.body.innerHTML = html;

  return document.body.firstElementChild as HTMLElement;
};

describe("focusElement", () => {
  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("logs an error and does nothing if element is null", () => {
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    expect(() => focusElement(null)).not.toThrow();
    expect(consoleError).toHaveBeenCalledOnce();
  });

  it("focuses a natively focusable element without adding tabindex", () => {
    const button = createElement("<button>Button</button>");

    focusElement(button);

    expect(document.activeElement).toBe(button);
    expect(button.hasAttribute("tabindex")).toBe(false);
  });

  it("adds tabindex to a non-focusable element and removes it on blur", () => {
    const div = createElement("<div>Div</div>");

    focusElement(div);

    expect(document.activeElement).toBe(div);
    expect(div.getAttribute("tabindex")).toBe("-1");

    div.blur();

    expect(div.hasAttribute("tabindex")).toBe(false);
  });

  it("preserves an existing tabindex", () => {
    const div = createElement('<div tabindex="-1">Div</div>');

    focusElement(div);

    expect(document.activeElement).toBe(div);

    div.blur();

    expect(div.getAttribute("tabindex")).toBe("-1");
  });

  it("passes options to focus()", () => {
    const button = createElement("<button>Button</button>");
    const focus = vi.spyOn(button, "focus");

    focusElement(button, { preventScroll: true });

    expect(focus).toHaveBeenCalledWith({ preventScroll: true });
  });
});
