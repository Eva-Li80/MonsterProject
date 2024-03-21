export type Hobbies = {
    name: string;
    level: number;
  };

  export type House = {
    name: string;
    floors: number;
  };
  
  
  export type Monster = {
    id: string;
    name: string;
    eyes: number;
    tentacles: number;
    color: string;
    horn: boolean;
    hobbies: Hobbies[];
    house: House
  };
  

  