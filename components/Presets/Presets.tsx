import css from "./Presets.module.css";

export function Presets() {
  return (
    <div className={css.container}>
      <select className={css.dropdown}>
        <option className={css.option}>LPDU</option>
      </select>
    </div>
  );
}
