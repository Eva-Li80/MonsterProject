import  { ChangeEvent } from "react";
import { Monster } from "../Types/types";

type MonsterDropdownProps = {
  monsters: Monster[];
  onSelect: (selectedMonster: Monster | undefined) => void;
};

const MonsterDropdown = ({ monsters, onSelect }: MonsterDropdownProps) => {
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
      const selectedMonsterId: string = e.target.value;
      const selectedMonster = monsters.find(monster => monster.id === selectedMonsterId);
      onSelect(selectedMonster || undefined);
    };
  
    return (
      <div>
        <select className="sel" onChange={handleSelectChange}>
          {monsters.map((monster) => (
            <option key={monster.id} value={monster.id}>{monster.name}</option>
          ))}
        </select>
      </div>
    );
  };
  
export default MonsterDropdown;
