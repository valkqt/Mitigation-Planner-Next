import css from "./SidebarControl.module.css";

interface SidebarControlProps {
  show: boolean;
  setShow: (state: boolean) => void;
}

export function SidebarControl({ show, setShow }: SidebarControlProps) {
  return (
    <div className={css.controller} onClick={() => setShow(!show)}>
      <div className={css.roundObject}>
        <div className={css.gear}>&#x2699;</div>
      </div>
    </div>
  );
}
