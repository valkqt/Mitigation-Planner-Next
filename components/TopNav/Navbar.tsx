"use client";

import Link from "next/link";
import css from "./Navbar.module.css";
import { useRef, useState } from "react";
import classNames from "classnames";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const timer = useRef<number>(0);

  return (
    <nav
      className={css.navbar}
      onMouseLeave={() => {
        window.clearTimeout(timer.current);
        setDropdown(true);
      }}
    >
      <div className={css.navTitle}>
        <Link href={"/"}>Mitplanner :3</Link>
      </div>
      <div>
        <ul className={css.navigationContainer}>
          <li className={css.listItem}>
            <Link
              href={"/encounters/1"}
              className={css.link}
              onClick={() => {
                setDropdown(!dropdown);
              }}
              onMouseOver={() => {
                timer.current = window.setTimeout(() => {
                  setDropdown(!dropdown);
                }, 500);
              }}
            >
              Current <span>&#11206;</span>
            </Link>
            <div
              className={classNames(css.dropdown, { toggleDisplay: dropdown })}
            >
              <ul>
                <li className={css.dropdownItem}>
                  <Link href={"/encounters/meow"}>Black Cat</Link>
                </li>
                <li className={css.dropdownItem}>
                  <Link href={"/encounters/meow"}>Honey B. Lovely</Link>
                </li>
                <li className={css.dropdownItem}>
                  <Link href={"/encounters/meow"}>Brute Bomber</Link>
                </li>
                <li className={css.dropdownItem}>
                  <Link href={"/encounters/meow"}>Wicked Thunder</Link>
                </li>
                <li className={css.dropdownItem}>
                  <Link href={"/encounters/meow"}>Futures Rewritten</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>Ultimate</li>
          <li>Savage</li>
          <li>Extreme</li>
        </ul>
      </div>
    </nav>
  );
}
