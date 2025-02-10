"use client";

import { useState } from "react";
import css from "./Navbar.module.css";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { createPortal } from "react-dom";
import LoginForm from "../Encounter/Test/LoginForm";
import SignIn from "../Encounter/Test/signin";
import Signout from "../Encounter/Test/signout";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const { data: session, status } = useSession();
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <nav className={classNames(css.navbar, !panelOpen ? css.pepe : "")}>
      <div className={css.arrow} onClick={() => setPanelOpen(!panelOpen)}>
        ←
      </div>
      <div className={css.authModule}>
        {panelOpen && (
          <div>
            <div className={css.navbarContent}>
              <h3>Mitigation Planner mrow</h3>
              <div>Eden's Gate: Refulgence</div>
              {!session?.user && (
                <>
                  <button
                    className={css.loginButton}
                    onClick={() => setShow(!show)}
                  >
                    Login
                  </button>
                </>
              )}
              {session?.user && <Signout />}
              {typeof window !== undefined &&
                createPortal(
                  <div
                    className={classNames(css.modal, { toggleDisplay: !show })}
                  >
                    <div>
                      <LoginForm />
                      <SignIn />
                    </div>
                  </div>,
                  document.body
                )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
