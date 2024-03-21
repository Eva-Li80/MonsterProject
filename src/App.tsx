import Monsters from "./Components/Monster";
import Monster from "./Components/Monster";
import { MonsterProvider } from "./Components/MonsterProvider";
import "./Styles/main.scss"

function App() {

  return (
    <>
    <MonsterProvider>
      <Monsters/>
    </MonsterProvider>
    </>
  )
}

export default App
