import { authenticate } from "@/actions/authenticate";

export default function SignIn() {
  async function onSubmit() {
    await authenticate();
  }
  return (
    <form action={() => onSubmit()}>
      <button type="submit">Signin with Google</button>
    </form>
  );
}
