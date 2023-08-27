/**
 * A collection of plain JavaScript DOM utility functions.
 *
 * These functions don’t rely on React, or React Native APIs.
 *
 * @packageDocumentation
 */

/**
 * Trigger screen reader announcement using hidden `aria-live` region.
 *
 * @remarks
 * See:
 *
 * - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
 *
 * Based on:
 *
 * - {@link https://a11y-guidelines.orange.com/en/web/components-examples/make-a-screen-reader-talk/}
 *
 * - {@link https://github.com/adobe/react-spectrum/blob/main/packages/\@react-aria/live-announcer/src/LiveAnnouncer.tsx}
 */
export declare const announce: ({ priority, text, }: {
    priority: "assertive" | "polite";
    text: string;
}) => void;

/**
 * Focus a DOM element.
 *
 * @remarks
 * Adds tabindex="-1" to element to make it focusable (removed on blur).
 *
 * @public
 */
export declare const focusElement: (element: HTMLElement | null, options?: FocusOptions) => void;

export { }
