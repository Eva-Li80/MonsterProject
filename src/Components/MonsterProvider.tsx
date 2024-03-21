import { useReducer } from "react";
import { Monster } from "../Types/types";
import { Action, MonsterContext, MonsterState, initialMonsterState } from "./MonsterContext";

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