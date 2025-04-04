"use client";

import Link from "next/link";
import css from "./Navbar.module.css";
import { useRef, useState } from "react";
import classNames from "classnames";
import { LoginComponent } from "./LoginComponent/LoginComponent";
import { useSession } from "next-auth/react";
import { LogoutComponent } from "./LogoutComponent/LogoutComponent";

function UserArea() {
  const { data: session, status } = useSession();

  return session ? <LogoutComponent /> : <LoginComponent />;
}

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const timer = useRef<number>(0);

  return (
    <nav
      className={css.navbar}
      onMouseLeave={() => {
        window.clearTimeout(timer.current);
        setDropdown(false);
      }}
    >
      <div className={css.leftNav}>
        <div className={css.navTitle}>
          <Link href={"/"}>Mitplanner :3</Link>
        </div>
        <div>
          <ul className={css.navigationContainer}>
            <li className={css.listItem}>
              <div
                className={css.link}
                onClick={() => {
                  setDropdown(!dropdown);
                }}
              >
                Current <span>&#11206;</span>
              </div>
              <div
                className={classNames(css.dropdown, {
                  toggleDisplay: !dropdown,
                })}
              >
                <ul>
                  <li className={css.dropdownItem}>
                    <Link href={"/encounters/1/presets/new"}>Black Cat</Link>
                  </li>
                  <li className={css.dropdownItem}>
                    <Link href={"/encounters/1/presets/new"}>
                      Honey B. Lovely
                    </Link>
                  </li>
                  <li className={css.dropdownItem}>
                    <Link href={"/encounters/1/presets/new"}>Brute Bomber</Link>
                  </li>
                  <li className={css.dropdownItem}>
                    <Link href={"/encounters/1/presets/new"}>
                      Wicked Thunder
                    </Link>
                  </li>
                  <li className={css.dropdownItem}>
                    <Link href={"/encounters/1/presets/new"}>
                      Futures Rewritten
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>Ultimate</li>
            <li>Savage</li>
            <li>Extreme</li>
          </ul>
        </div>
      </div>
      <div className={css.rightNav}>
        <UserArea />
      </div>
    </nav>
  );
}
