import classNames from "classnames";
import css from "./LoginComponent.module.css";
import { authenticate } from "@/actions/authenticate";
import { useState } from "react";

export function LoginComponent() {
  const [show, setShow] = useState(false);
  async function onSubmit() {
    await authenticate();
  }
  return (
    <div className={css.container}>
      <button onClick={() => setShow(true)}>Login</button>
      <div className={classNames({ toggleDisplay: !show }, css.modal)}>
        <form action={() => onSubmit()}>
          <button type="submit">Signin with Google</button>
        </form>
      </div>
    </div>
  );
}
