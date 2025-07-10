import { encounterMap } from "@/src/domain/globals";
import css from "./LoadingComponent.module.css";
import { FadeLoader } from "react-spinners";
import Image from "next/image";

interface LoadingComponentProps {
  encounterId: string;
}

export function LoadingComponent({ encounterId }: LoadingComponentProps) {
  return (
    <div className={css.backdrop}>
      <div className={css.container}>
        <div className={css.imgContainer}>
          <Image
            src={encounterMap[encounterId]}
            className={css.image}
            alt=""
            width={376}
            height={120}
          />
        </div>
        <div>Mitigation Planner is initializing...</div>
        <div className={css.spinner}>
          <FadeLoader color="white" />
        </div>
      </div>
    </div>
  );
}
