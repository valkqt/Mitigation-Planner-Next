import Link from "next/link";
import css from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={css.navbar}>
      <div className={css.navTitle}>Mitplanner :3</div>
      <div>
        <ul className={css.navigationContainer}>
          <li><Link href={"/encounters/1"}>Current</Link></li>
          <li>Ultimate</li>
          <li>Savage</li>
          <li>Extreme</li>
        </ul>
      </div>
    </nav>
  );
}
