/**
 * A collection of plain JavaScript DOM utility functions.
 *
 * These functions don’t rely on React, or React Native APIs.
 *
 * @packageDocumentation
 */

/**
 * Focus a DOM element.
 *
 * @remarks
 * Adds tabindex="-1" to element to make it focusable (removed on blur).
 *
 * @public
 */
export declare const focusElement: (element: HTMLElement | null) => void;

export { }
