import { createFileRoute } from "@tanstack/react-router";
import DFT from "../pages/DFT";

export const Route = createFileRoute("/dft")({
  component: DFT,
});
