import css from "./Header.module.css";

interface HeaderProps {
  content: string;
}

export function Header({ content }: HeaderProps) {
  return (
    <div className={css.EncounterInfo}>
      <h1 className={css.EncounterHeader}>{content}</h1>
    </div>
  );
}
