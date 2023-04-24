import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";

export default function Root() {
  return (
    <div className="flex flex-col w-full flex-1 h-full">
      <TopBar />
      <Outlet />
    </div>
  );
}