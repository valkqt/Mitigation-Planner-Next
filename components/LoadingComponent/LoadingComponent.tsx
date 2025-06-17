import { encounterMap } from "@/resources";
import css from "./LoadingComponent.module.css";
import { FadeLoader } from "react-spinners";

interface LoadingComponentProps {
  encounterId: string;
}

export function LoadingComponent({ encounterId }: LoadingComponentProps) {
  return (
    <div className={css.backdrop}>
      <div className={css.container}>
        <div className={css.imgContainer}>
          <img src={encounterMap[encounterId]} className={css.image} />
        </div>
        <div>Mitigation Planner is initializing...</div>
        <div className={css.spinner}>
          <FadeLoader color="white" />
        </div>
      </div>
    </div>
  );
}
