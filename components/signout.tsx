import serverSignOut from "@/actions/serverSignOut";

export default function Signout() {
  async function onSubmit() {
    await serverSignOut();
  }
  return (
    <form action={() => onSubmit()}>
      <button type="submit">Sign Out</button>
    </form>
  );
}
