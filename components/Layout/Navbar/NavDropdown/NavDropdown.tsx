import classNames from "classnames";
import css from "./NavDropdown.module.css";
import { useState } from "react";
import Link from "next/link";
import useClickOutside from "@/src/hooks/useClickOutside";

type NavLinkCollection = {
  label: string;
  link: string;
};

interface NavDropdownProps {
  label: string;
  links: NavLinkCollection[];
}

export function NavDropdown({ label, links }: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  const ref = useClickOutside<HTMLDivElement>(handleClickOutside);

  function handleClickOutside() {
    setOpen(false);
  }

  return (
    <>
      <div
        className={css.link}
        ref={ref}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {label} <span>&#11206;</span>
      </div>
      <div
        className={classNames(css.dropdown, {
          toggleDisplay: !open,
        })}
      >
        <ul>
          {links.map((item) => (
            <li className={css.dropdownItem} key={item.label}>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
