import { useSession } from "next-auth/react";
import { LoginComponent } from "./LoginComponent";
import { LogoutComponent } from "./LogoutComponent";

export function UserArea() {
  const { data: session } = useSession();

  return session ? <LogoutComponent /> : <LoginComponent />;
}
