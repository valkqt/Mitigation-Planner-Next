import serverSignOut from "@/src/services/server/auth/serverSignOut";
import css from "./LogoutComponent.module.css";
import { FormEvent } from "react";

export function LogoutComponent() {
  async function handleModalSubmit(e: FormEvent) {
    e.preventDefault();
    await serverSignOut();
    window.location.reload();
  }

  return (
    <form onSubmit={(e) => handleModalSubmit(e)}>
      <button type="submit" className={css.signout}>
        Sign out
      </button>
    </form>
  );
}
