import getUserInfo from "@/actions/getUserInfo";
import { Session } from "next-auth";
import { useEffect, useState } from "react";

export default function Userinfo() {
  const [session, setSession] = useState<Session | null>();
  useEffect(() => {
    if (!session) {
      getUserInfo().then((res) => setSession(res));
    }
  }, []);
  return <div>hello {session?.user?.name}</div>;
}
