import css from "./CustomHeader.module.css";

interface HeaderProps {
  content: string;
}

export function CustomHeader({ content }: HeaderProps) {
  return (
    <div className={css.EncounterInfo}>
      <h1 className={css.EncounterHeader}>{content}</h1>
    </div>
  );
}
