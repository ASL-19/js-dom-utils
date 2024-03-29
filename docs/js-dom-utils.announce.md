<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@asl-19/js-dom-utils](./js-dom-utils.md) &gt; [announce](./js-dom-utils.announce.md)

## announce variable

Trigger screen reader announcement using hidden `aria-live` region.

**Signature:**

```typescript
announce: ({ priority, text, }: {
    priority: "assertive" | "polite";
    text: string;
}) => void
```

## Remarks

See:

- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA\_Live\_Regions

Based on:

- [https://a11y-guidelines.orange.com/en/web/components-examples/make-a-screen-reader-talk/](https://a11y-guidelines.orange.com/en/web/components-examples/make-a-screen-reader-talk/)

- [https://github.com/adobe/react-spectrum/blob/main/packages/\\@react-aria/live-announcer/src/LiveAnnouncer.tsx](https://github.com/adobe/react-spectrum/blob/main/packages/\@react-aria/live-announcer/src/LiveAnnouncer.tsx)

