import { createFileRoute } from "@tanstack/react-router";

import { DesktopNotice } from "../components/desktop-notice/desktop-notice";

import { Lagput } from "../pages/lagput";

export const Route = createFileRoute("/lagput")({
  component: () => (
    <DesktopNotice>
      <Lagput />
    </DesktopNotice>
  ),
});
