import  { useState } from "react";
import { useMonsterContext } from "./MonsterContext";
import monsterImage from "../assets/istockphoto-851853148-2048x2048.jpg";
import MonsterDropdown from "./MonsterDropdown";
import { Monster } from "../Types/types";
import MonsterSearch from "./MonsterSearch";
import MonsterAdd from "./MonsterAdd";

const Monsters = () => {
  const { state, dispatch } = useMonsterContext();

  const [selectedMonster, setSelectedMonster] = useState<Monster | null>(null);

  const handleRemove = (index: number) => {
    dispatch({
      type: "Remove",
      payload: index.toString(),
    });
  };

  const handleChangee = (selectedMonster: Monster | undefined) => {
    setSelectedMonster(selectedMonster || null);
  };

  return (
    <div
      className="monster-container"
      style={{ backgroundColor: "green", color: "white", padding: 10 }}
    >
      <h1>Monster Context</h1>
      {selectedMonster && (
        <div
          key={selectedMonster.id}
          className="monsterinfo"
          style={{ color: "green" }}
        >
          <p>Name: {selectedMonster.name},</p>{" "}
          <p>Eyes: {selectedMonster.eyes},</p>{" "}
          <p>Tentacles: {selectedMonster.tentacles}</p>
          <p> Horn: {selectedMonster.horn ? "yes" : "no"}</p>
          <p>Color: {selectedMonster.color}</p>
          {selectedMonster.hobbies.map((h, i) => (
            <p key={i}>
              Hobbies: {h.name} level: {h.level}
            </p>
          ))}
          <p>
            House name: {selectedMonster.house.name}, Floors:{" "}
            {selectedMonster.house.floors}
          </p>
        </div>
      )}
      <MonsterDropdown monsters={state.monsters} onSelect={handleChangee} />
      {state.monsters.length > 0 ? (
        <div>
          <ul className="monsterlist">
            {state.monsters.map((monster, index) => {
              return (
                <li
                  style={{ listStyle: "none", color: monster.color }}
                  key={index}
                >
                  <div
                    className={`monster monster${index + 1}`}
                    style={{ backgroundImage: `url(${monsterImage})` }}
                  ></div>
                  <div className="monsterinfo">
                    <p>Name: {monster.name},</p> <p>eyes: {monster.eyes},</p>{" "}
                    <p>
                      tentacles:
                      {monster.tentacles}
                    </p>
                    <p> Horn: {monster.horn ? "yes" : "no"}</p>
                    <p>color: {monster.color}</p>
                    {monster.hobbies.map((h, i) => (
                      <p key={i}>
                        Hobbies: {h.name} level: {h.level}
                      </p>
                    ))}
                    <p>
                      House name: {monster.house.name}, floors:{" "}
                      {monster.house.floors}
                    </p>
                    <button className="btn" onClick={() => handleRemove(index)}>
                      X
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>No monsters are available</p>
      )}
      <MonsterAdd />
      <MonsterSearch />
    </div>
  );
};

export default Monsters;
