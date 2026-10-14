/**
 * Focus a DOM element.
 *
 * @remarks
 * If the element isn’t already focusable, adds tabindex="-1" to make it
 * focusable (removed on blur).
 *
 * @public
 */
const focusElement = (element: HTMLElement | null, options?: FocusOptions) => {
  if (!(element instanceof HTMLElement)) {
    console.error(
      "[focusElement] Not focussing because provided element isn’t HTMLElement:",
      element,
    );
    return;
  }

  if (element.tabIndex < 0 && !element.hasAttribute("tabindex")) {
    element.setAttribute("tabindex", "-1");
    element.addEventListener(
      "blur",
      () => {
        element.removeAttribute("tabindex");
      },
      { once: true },
    );
  }

  element.focus(options);
};

export default focusElement;
