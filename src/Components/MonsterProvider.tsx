import { useReducer } from "react";
import { Action, Monster, MonsterState } from "../Types/types";
import { MonsterContext } from "./MonsterContext";
import { v4 as uuidv4 } from "uuid";

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
  

const reducerMonster = (state: MonsterState, action: Action): MonsterState => {
    switch (action.type) {
      case "Add":
        return {
          ...state,
          monsters: [...state.monsters, action.payload as Monster],
        };
      case "Remove":
        const indexToRemove = Number(action.payload);
        return {
          ...state,
          monsters: state.monsters.filter((_, index) => index !== indexToRemove)
        };
  
      default:
        return state;
    }
  };
  
  type MonsterProviderProps = {
    children: React.ReactNode;
  };
  
  export const MonsterProvider = ({ children }: MonsterProviderProps) => {
    const [state, dispatch] = useReducer(reducerMonster, initialMonsterState);
  
    return (
      <MonsterContext.Provider value={{ state, dispatch }}>
        {children}
      </MonsterContext.Provider>
    );
  };

