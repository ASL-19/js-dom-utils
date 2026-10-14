[**@asl-19/js-dom-utils**](../README.md)

***

[@asl-19/js-dom-utils](../README.md) / announce

# Function: announce()

> **announce**(`options`): `void`

Trigger screen reader announcement using hidden `aria-live` region.

## Parameters

### options

Announcement options

#### priority

`"assertive"` \| `"polite"`

`aria-live` priority of the announcement

#### text

`string`

Text to announce

## Returns

`void`

## Remarks

See:

- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions

Based on:

- [https://a11y-guidelines.orange.com/en/web/components-examples/make-a-screen-reader-talk/](https://a11y-guidelines.orange.com/en/web/components-examples/make-a-screen-reader-talk/)

- [https://github.com/adobe/react-spectrum/blob/main/packages/@react-aria/live-announcer/src/LiveAnnouncer.tsx](https://github.com/adobe/react-spectrum/blob/main/packages/@react-aria/live-announcer/src/LiveAnnouncer.tsx)
