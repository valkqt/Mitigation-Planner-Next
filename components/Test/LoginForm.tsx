import { credentialSignIn } from "@/actions/pepe";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const credentials = { email: email, password: password };
    await credentialSignIn(credentials);
    if (typeof window !== undefined) {
      window.location.reload();
    }
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">submit</button>
    </form>
  );
}
