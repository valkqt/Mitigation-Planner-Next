import { Job } from "@/resources";
import Sidebar from "./Sidebar/Sidebar";
import { SidebarControl } from "./SidebarControl/SidebarControl";
import { useState } from "react";

interface SidebarProps {
  jobs: Job[];
}

export function SidebarComponent({ jobs }: SidebarProps) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <SidebarControl show={showSidebar} setShow={setShowSidebar} />
      <Sidebar jobs={jobs} show={showSidebar} setShow={setShowSidebar} />
    </>
  );
}
