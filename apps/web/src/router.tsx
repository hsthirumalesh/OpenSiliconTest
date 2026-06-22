import { createRouter, createRoute, createRootRoute } from "@tanstack/react-router";
import AppShell from "../app/AppShell";
import Home from "../pages/Home";
import DFT from "../pages/DFT";
import Scan from "../pages/Scan";
import IJTAG from "../pages/IJTAG";

const rootRoute = createRootRoute({
  component: AppShell,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const dftRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dft",
  component: DFT,
});

const scanRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/scan",
  component: Scan,
});

const ijtagRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ijtag",
  component: IJTAG,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  dftRoute,
  scanRoute,
  ijtagRoute,
]);

export const router = createRouter({ routeTree });
