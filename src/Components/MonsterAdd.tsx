import { ChangeEvent, useState } from "react";
import { useMonsterContext } from "./MonsterContext";
import uuid from "react-uuid";

const MonsterAdd = () => {
  const { dispatch } = useMonsterContext();
  const [name, setName] = useState<string>("");
  const [eyes, setEyes] = useState<number>(0);
  const [tentacles, setTentacles] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const [hobbies, setHobbies] = useState<{ name: string; level: number }[]>([
    { name: "", level: 0 },
  ]);
  const [house, setHouse] = useState<{ name: string; floors: number }>({
    name: "",
    floors: 0,
  });

  const handleAddMonster = () => {
    dispatch({
      type: "Add",
      payload: {
        id: uuid(),
        name: name,
        eyes: eyes,
        tentacles: tentacles,
        color: color,
        horn: true,
        hobbies: hobbies,
        house: house,
      },
    });
  };

  const handleEventName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEventEyes = (e: ChangeEvent<HTMLInputElement>) => {
    setEyes(parseInt(e.target.value));
  };
  const handleEventTen = (e: ChangeEvent<HTMLInputElement>) => {
    setTentacles(parseInt(e.target.value));
  };
  const handleEventColor = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  const handleEventHobbies = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const [name, level] = value.split(" ");
    setHobbies([{ name, level: parseInt(level) }]);
  };
  return (
    <div className="add">
      <input type="text" onChange={handleEventName} placeholder="name" />
      <input type="text" onChange={handleEventEyes} placeholder="eyes" />
      <input type="text" onChange={handleEventTen} placeholder="tentacles" />
      <input type="text" onChange={handleEventHobbies} placeholder="hobbies.. and level.." />
      <input type="text" onChange={handleEventColor} placeholder="color" />
      <button onClick={handleAddMonster}>add monster</button>
    </div>
  );
};

export default MonsterAdd;
