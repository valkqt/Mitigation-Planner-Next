import { credentialSignIn } from "@/actions/pepe";
import { FormEvent } from "react";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const credentials = { email: email, password: password };
    credentialSignIn(credentials);
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
