import { FormEvent } from "react";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const credentials = { email: email, password: password };
    console.log("frontend", credentials);
    fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    // await api.post("/users", user).then((res) => console.log("backend", res));
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
