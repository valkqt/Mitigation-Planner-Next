import { api } from "@/resources/axios";
import { FormEvent, useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const user = { email: email, password: password };
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(user),
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
