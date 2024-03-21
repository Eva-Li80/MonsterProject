import { createContext, useContext } from "react";
import {  Action,  MonsterState } from "../Types/types";

  export const MonsterContext = createContext<
    | {
        state: MonsterState;
        dispatch: React.Dispatch<Action>;
      }
    | undefined
  >(undefined);
  
  export const useMonsterContext = () => {
    const monster = useContext(MonsterContext);
    if (monster === undefined) {
      throw new Error("error...");
    }
    return monster;
  };

