import { Job, PlayerSkill, PlayerSkillType, SkillTarget } from "@/resources";
import Sidebar from "./Sidebar/Sidebar";
import { SidebarControl } from "./SidebarControl/SidebarControl";
import { useState } from "react";

interface SidebarProps {
  jobs: Job[];
  abilities: PlayerSkill[];
  onJobSelection: (jobId: number) => void;
  onAbilityFilter: (abilityId: number) => void;
  onAbilityTypeFilter: (filter: SkillTarget | PlayerSkillType) => void;
  onLevelFilter: (threshold: number) => void;
}

export function SidebarComponent({
  jobs,
  abilities,
  onJobSelection,
  onAbilityFilter,
  onAbilityTypeFilter,
  onLevelFilter,
}: SidebarProps) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <SidebarControl show={showSidebar} setShow={setShowSidebar} />

      <Sidebar
        jobs={jobs}
        abilities={abilities}
        onAbilityFilter={onAbilityFilter}
        onAbilityTypeFilter={onAbilityTypeFilter}
        onJobSelection={onJobSelection}
        onLevelFilter={onLevelFilter}
        show={showSidebar}
        setShow={setShowSidebar}
      />
    </div>
  );
}
