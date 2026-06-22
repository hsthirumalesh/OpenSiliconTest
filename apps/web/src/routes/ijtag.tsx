import { createFileRoute } from "@tanstack/react-router";
import IJTAG from "../pages/IJTAG";

export const Route = createFileRoute("/ijtag")({
  component: IJTAG,
});
