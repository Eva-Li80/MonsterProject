import { ChangeEvent, useState } from "react";
import { useMonsterContext } from "./MonsterContext";


const MonsterSearch = ({}) => {
  const { state } = useMonsterContext();
  const [searchName, setSearchName] = useState<string>("");
  const [foundMonster, setFoundMonster] = useState<string | null>(null);
 

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
    setFoundMonster(null);
  };

  const handleSearchClick = (name: string) => {
    const found = state.monsters.find((t) => t.name === name);
    if (found) {
      setFoundMonster(found.name);
    }
  };

  return (
    <div className="monstersearch">
      <div className="monster-input">
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={handleSearch}
        />
        <button
          style={{ marginLeft: 10 }}
          onClick={() => handleSearchClick(searchName)}
        >
          Search by monster name
        </button>
        {foundMonster && (
          <div>
            <p>Monster found: {foundMonster}</p>
          </div>
        )}
        {foundMonster === null && (
          <div>
            <p>No monster found with that name.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MonsterSearch;
