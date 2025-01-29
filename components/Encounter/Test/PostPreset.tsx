import { useActivationFlagsContext } from "@/contexts";
import { GlobalFlags, Segment } from "@/types";

interface PostPresetTypes {
  segments: Record<number, Segment[]>;
}

export default function PostPreset({ segments }: PostPresetTypes) {
  const [flags] = useActivationFlagsContext();

  function save(flags: GlobalFlags, segments: Record<number, Segment[]>) {
    fetch("/api/users/presets", {
      method: "POST",
      body: JSON.stringify({
        userId: "cm6b04r0c0000dlngaqyo2ync",
        filters: flags,
        nodes: segments,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return <button onClick={() => save(flags, segments)}>SAVE PRESET</button>;
}
