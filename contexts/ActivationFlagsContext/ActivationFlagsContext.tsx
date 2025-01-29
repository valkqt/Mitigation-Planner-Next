import { createContext, useContext, Dispatch } from "react";
import { defaultFlags, GlobalFlags } from "@/resources/index";
import { FlagActivationAction } from "@/contexts/index";

type SetActivationFlagFunction = Dispatch<FlagActivationAction>;
type ActivationFlagsContextType = [GlobalFlags, SetActivationFlagFunction];

export const ActivationFlagsContext = createContext<ActivationFlagsContextType>(
  [defaultFlags, () => {}]
);

export const useActivationFlagsContext = () =>
  useContext(ActivationFlagsContext);
