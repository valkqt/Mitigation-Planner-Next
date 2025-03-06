import { ReactNode } from "react";
import css from "./CustomSelect.module.css";

interface CustomSelectProps {
  src: string;
  children: ReactNode;
}

export function Select({ src, children }: CustomSelectProps) {
  return (
    <div className={css.label}>
      {src && <img src={src} className="miniIcon" alt="" />}
      {children}
    </div>
  );
}
