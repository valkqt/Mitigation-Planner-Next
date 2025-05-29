import { PropsWithChildren, useReducer } from "react";
import { ActivationFlagsContext } from "@/contexts/index";
import { GlobalFlags, defaultFlags } from "@/resources/index";

export enum FlagActivationTypes {
  ToggleJobFlag = "toggleJobFlag",
  ToggleAbilityFlag = "toggleAbilityFlag",
  ToggleSkillTargetFlag = "toggleSkillTargetFlag",
  TogglePlayerSkillTypeFlag = "togglePlayerSkillTypeFlag",
  LevelFilterFlag = "levelFilterFlag",
}

interface ActionWithNumber {
  type:
    | FlagActivationTypes.ToggleJobFlag
    | FlagActivationTypes.ToggleAbilityFlag
    | FlagActivationTypes.LevelFilterFlag;
  payload: number;
}

interface ActionWithString {
  type:
    | FlagActivationTypes.ToggleSkillTargetFlag
    | FlagActivationTypes.TogglePlayerSkillTypeFlag;
  payload: string;
}

interface ReplaceFlagsAction {
  type: string;
  payload: GlobalFlags;
}

export type FlagActivationAction =
  | ActionWithNumber
  | ActionWithString
  | ReplaceFlagsAction;

function reducer(state: GlobalFlags, action: FlagActivationAction) {
  
  if (typeof(action.payload) === "object") {
    return action.payload;
  }

  if (action.type === "toggleJobFlag") {
    return {
      ...state,
      jobs: { ...state.jobs, [action.payload]: !state.jobs[action.payload] },
    };
  }

  if (action.type === "toggleAbilityFlag") {
    return {
      ...state,
      abilities: {
        ...state.abilities,
        [action.payload]: !state.abilities[action.payload],
      },
    };
  }

  if (action.type === "toggleSkillTargetFlag") {
    return {
      ...state,
      target: {
        ...state.target,
        [action.payload]: !state.target[action.payload],
      },
    };
  }

  if (action.type === "togglePlayerSkillTypeFlag") {
    return {
      ...state,
      skillType: {
        ...state.skillType,
        [action.payload]: !state.skillType[action.payload],
      },
    };
  }
  if (action.type === "levelFilterFlag") {
    return {
      ...state,
      level: action.payload,
    };
  }

  throw Error("mrow");
}
export const ActivationFlagsContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, defaultFlags);

  return (
    <ActivationFlagsContext.Provider value={[state, dispatch]}>
      {children}
    </ActivationFlagsContext.Provider>
  );
};
