"use client";

import Link from "next/link";
import css from "./Navbar.module.css";
import { NavDropdown } from "./NavDropdown";
import { currentRaids } from "@/src/domain/globals";
import { UserArea } from "./UserArea";

export default function Navbar() {
  return (
    <nav className={css.navbar}>
      <div className={css.leftNav}>
        <div className={css.navTitle}>
          <Link href={"/"}>Mitplanner :3</Link>
        </div>
        <div>
          <ul className={css.navigationContainer}>
            <li className={css.listItem}>
              <NavDropdown label="Current" links={currentRaids} />
            </li>
            <li>
              Ultimate <span>&#11206;</span>
            </li>
            <li>
              Savage <span>&#11206;</span>
            </li>
            <li>
              Extreme <span>&#11206;</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.rightNav}>
        <UserArea />
      </div>
    </nav>
  );
}
