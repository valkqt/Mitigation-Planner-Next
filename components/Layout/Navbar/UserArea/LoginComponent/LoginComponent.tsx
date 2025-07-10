import classNames from "classnames";
import css from "./LoginComponent.module.css";
import { authenticate } from "@/src/services/server/auth/authenticate";
import { useState } from "react";
import useClickOutside from "@/src/hooks/useClickOutside";

export function LoginComponent() {
  const [show, setShow] = useState(false);

  function handleClickOutside(): void {
    setShow(false);
  }

  const ref = useClickOutside<HTMLDivElement>(handleClickOutside);

  async function onSubmit() {
    await authenticate("google");
  }

  return (
    <div className={css.container}>
      <button onClick={() => setShow(true)} className={css.button}>
        Login
      </button>
      <div
        className={classNames({ toggleDisplay: !show }, css.modal)}
        ref={ref}
      >
        <form action={() => onSubmit()}>
          <button type="submit" className={css.signin}>
            Signin with Google
          </button>
        </form>
      </div>
    </div>
  );
}
