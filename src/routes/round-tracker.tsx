import { createFileRoute } from "@tanstack/react-router";

import { DesktopNotice } from "../components/desktop-notice/desktop-notice";
import { RoundTrackerPage } from "../pages/round-tracker";

export const Route = createFileRoute("/round-tracker")({
  component: () => (
    <DesktopNotice>
      <RoundTrackerPage />
    </DesktopNotice>
  ),
});
