const onElementBlur = (event: FocusEvent) => {
  const element = event.target as HTMLElement;
  element.removeAttribute("tabindex");
  element.removeEventListener("blur", onElementBlur);
};

/**
 * Focus a DOM element.
 *
 * @remarks
 * Adds tabindex="-1" to element to make it focusable (removed on blur).
 *
 * @public
 */
const focusElement = (
  element: HTMLElement | null,
  options: FocusOptions = { preventScroll: false },
) => {
  if (!(element instanceof HTMLElement)) {
    console.error(
      "[focusElement] Not focussing because provided element isn’t HTMLElement:",
      element,
    );
    return;
  }

  element.setAttribute("tabindex", "-1");
  element.addEventListener("blur", onElementBlur);
  element.focus(options);
};

export default focusElement;
