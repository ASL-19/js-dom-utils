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
 * @public
 */
const announce = ({
  priority,
  text,
}: {
  priority: "assertive" | "polite";
  text: string;
}) => {
  if (typeof window === "undefined") {
    console.warn(
      "Tried to announce from server code — this shouldn't ever happen!",
    );

    return;
  }

  const containerId = `asl19-${priority}-announcements`;

  const existingContainerElement = document.getElementById(containerId);
  const containerElement =
    existingContainerElement ?? document.createElement("div");

  if (!existingContainerElement) {
    containerElement.setAttribute("aria-live", priority);
    containerElement.setAttribute("id", containerId);
    containerElement.setAttribute("role", "log");

    containerElement.style.border = "0";
    containerElement.style.clipPath = "inset(50%)";
    containerElement.style.height = "1px";
    containerElement.style.margin = "-1px";
    containerElement.style.overflow = "hidden";
    containerElement.style.padding = "0";
    containerElement.style.position = "absolute";
    containerElement.style.whiteSpace = "nowrap";
    containerElement.style.width = "1px";

    document.body.appendChild(containerElement);
  }

  const announcementElement = document.createElement("div");
  announcementElement.textContent = text;

  const appendAnnouncement = () => {
    containerElement.appendChild(announcementElement);

    window.setTimeout(() => {
      announcementElement.remove();
    }, 3000);
  };

  // Screen readers may ignore changes to a live region that was just added to
  // the DOM, so give them a moment to register a new container
  if (existingContainerElement) {
    appendAnnouncement();
  } else {
    window.setTimeout(appendAnnouncement, 100);
  }

  if (
    typeof process !== "undefined" &&
    process.env.NODE_ENV === "development"
  ) {
    console.info(`${priority} announcement: ${text}`);
  }
};

export default announce;
