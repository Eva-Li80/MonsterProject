import { createContext, useContext } from "react";
import {  Monster } from "../Types/types";
import { v4 as uuidv4 } from "uuid";


// GlobalState
export type MonsterState = {
    monsters: Monster[];
  };
  
  // Actions
 export type Action = {
    type: "Add" | "Remove";
    payload: Monster | string;
  };
  
  export const initialMonsterState: MonsterState = {
    monsters: [
      {
        id: uuidv4(),
        name: "Gugge",
        eyes: 3,
        tentacles: 12,
        color: "red",
        horn: true,
        hobbies: [{ name: "Fishing", level: 12 }],
        house: {name: "villa green", floors: 5}
      },
      {
        id: uuidv4(),
        name: "Lisa",
        eyes: 26,
        tentacles: 9,
        color: "blue",
        horn: false,
        hobbies: [{ name: "Chess", level: 99 }],
        house: {name: "villa blue", floors: 3}
      },
    ],
  };
  
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

