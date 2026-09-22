import { createFileRoute } from "@tanstack/react-router";

import { DesktopNotice } from "../components/desktop-notice/desktop-notice";
import { SavedRounds } from "../pages/lagput/saved-rounds";

export const Route = createFileRoute("/saved-rounds")({
  component: () => (
    <DesktopNotice>
      <SavedRounds />
    </DesktopNotice>
  ),
});
