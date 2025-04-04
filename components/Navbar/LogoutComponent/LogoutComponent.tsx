import serverSignOut from "@/resources/serverActions/serverSignOut";
import css from "./LogoutComponent.module.css";
import { FormEvent } from "react";

export function LogoutComponent() {
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await serverSignOut();
    window.location.reload();
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <button type="submit">Sign out</button>
    </form>
  );
}
