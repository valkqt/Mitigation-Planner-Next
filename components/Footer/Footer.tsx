import Link from "next/link";
import css from "./Footer.module.css";

export function Footer() {
  return (
    <div className={css.footer}>
      <div className={css.contents}>
        <div>Mitigation Planner (demo) - 2025</div>
        <div className={css.links}>
          <Link href={"/contacts"} className={css.link}>
            Contacts
          </Link>
          <Link href={"/credits"} className={css.link}>
            Credits
          </Link>
        </div>
      </div>
    </div>
  );
}
