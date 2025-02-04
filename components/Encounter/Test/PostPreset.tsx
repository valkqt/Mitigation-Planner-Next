import { useActivationFlagsContext } from "@/contexts";
import { GlobalFlags, Segment, Encounter } from "@/resources/index";
import { useSession } from "next-auth/react";
import { useState } from "react";

interface PostPresetTypes {
  segments: Record<number, Segment[]>;
  encounter: Encounter;
}

export default function PostPreset({ segments, encounter }: PostPresetTypes) {
  const [flags] = useActivationFlagsContext();
  const [name, setName] = useState("");
  const { data: session, status } = useSession();

  function save(
    name: string,
    flags: GlobalFlags,
    segments: Record<number, Segment[]>
  ) {
    const id = session?.token.sub;
    fetch("/api/users/presets", {
      method: "POST",
      body: JSON.stringify({
        userId: id,
        name: name,
        encounter: encounter,
        filters: flags,
        nodes: segments,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <form onSubmit={() => save(name, flags, segments)}>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button type="submit">SAVE PRESET</button>
    </form>
  );
}
