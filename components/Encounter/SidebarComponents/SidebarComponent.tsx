import { Job, PlayerSkill, PlayerSkillType, SkillTarget } from "@/resources";
import Sidebar from "./Sidebar/Sidebar";
import { SidebarControl } from "./SidebarControl/SidebarControl";
import { useState } from "react";
import { FlagActivationTypes, useActivationFlagsContext } from "@/contexts";

interface SidebarProps {
  jobs: Job[];
}

export function SidebarComponent({ jobs }: SidebarProps) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [, setFlags] = useActivationFlagsContext();

  function handleJobSelection(jobId: number) {
    setFlags({ type: FlagActivationTypes.ToggleJobFlag, payload: jobId });
  }

  function toggleAbility(abilityId: number) {
    setFlags({
      type: FlagActivationTypes.ToggleAbilityFlag,
      payload: abilityId,
    });
  }

  function handleLevelFilter(threshold: number) {
    setFlags({
      type: FlagActivationTypes.LevelFilterFlag,
      payload: threshold,
    });
  }

  function handleAbilityFilter(filter: SkillTarget | PlayerSkillType) {
    if (filter in SkillTarget) {
      setFlags({
        type: FlagActivationTypes.ToggleSkillTargetFlag,
        payload: filter,
      });
    } else {
      setFlags({
        type: FlagActivationTypes.TogglePlayerSkillTypeFlag,
        payload: filter,
      });
    }
  }

  return (
    <div>
      <SidebarControl show={showSidebar} setShow={setShowSidebar} />

      <Sidebar
        jobs={jobs}
        onAbilityFilter={toggleAbility}
        onAbilityTypeFilter={handleAbilityFilter}
        onJobSelection={handleJobSelection}
        onLevelFilter={handleLevelFilter}
        show={showSidebar}
        setShow={setShowSidebar}
      />
    </div>
  );
}
