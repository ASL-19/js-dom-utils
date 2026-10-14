[**@asl-19/js-dom-utils**](../README.md)

***

[@asl-19/js-dom-utils](../README.md) / focusElement

# Function: focusElement()

> **focusElement**(`element`, `options?`): `void`

Focus a DOM element.

## Parameters

### element

`HTMLElement` \| `null`

### options?

`FocusOptions`

## Returns

`void`

## Remarks

If the element isn’t already focusable, adds tabindex="-1" to make it
focusable (removed on blur).
