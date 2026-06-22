import { Outlet } from "@tanstack/react-router";
import Sidebar from "../layouts/Sidebar";
import Topbar from "../layouts/Topbar";

export default function AppShell() {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
