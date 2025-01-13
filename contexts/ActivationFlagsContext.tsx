import { createContext, useContext } from "react";
import { GlobalFlags } from "../resources/types";
import { defaultFlags } from "../resources/globals";
import { Dispatch } from "react";
import { FlagActivationAction } from "./ActivationFlagsContextProvider";

type SetActivationFlagFunction = Dispatch<FlagActivationAction>;
type ActivationFlagsContextType = [GlobalFlags, SetActivationFlagFunction];

export const ActivationFlagsContext = createContext<ActivationFlagsContextType>(
  [defaultFlags, () => {}]
);

export const useActivationFlagsContext = () =>
  useContext(ActivationFlagsContext);
