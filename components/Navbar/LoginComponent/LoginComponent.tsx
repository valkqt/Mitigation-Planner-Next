import classNames from "classnames";
import css from "./LoginComponent.module.css";
import { authenticate } from "@/resources/serverActions/authenticate";
import { useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";

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
      <button onClick={() => setShow(true)}>Login</button>
      <div
        className={classNames({ toggleDisplay: !show }, css.modal)}
        ref={ref}
      >
        <form action={() => onSubmit()}>
          <button type="submit">Signin with Google</button>
        </form>
      </div>
    </div>
  );
}
