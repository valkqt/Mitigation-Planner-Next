import { Encounter } from "@prisma/client";
import css from "./EncounterHeader.module.css";

interface EncounterHeaderProps {
  encounter: Encounter;
}

export function EncounterHeader({ encounter }: EncounterHeaderProps) {
  return (
    <div className={css.EncounterInfo}>
      <h1 className={css.EncounterHeader}>{encounter.name}</h1>
    </div>
  );
}
