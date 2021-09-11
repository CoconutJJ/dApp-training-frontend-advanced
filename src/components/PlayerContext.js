import Player from "./player";
import { createContext, useState } from "react";

export const PlayerContext = createContext();
function PlayerProvider({ children }) {

  let [colors, setColors] = useState({
    "red": false,
    "blue": false,
    "green": false,
    "yellow": false
  })

  let [p1Color, setP1Color] = useState(null)
  let [p2Color, setP2Color] = useState(null)
  let [p3Color, setP3Color] = useState(null)
  let [p4Color, setP4Color] = useState(null)

  return (
    <PlayerContext.Provider value={{
      p1: p1Color,
      p1Set: setP1Color,
      p2: p2Color,
      p2Set: setP2Color,
      p3: p3Color,
      p3Set: setP3Color,
      p4: p4Color,
      p4Set: setP4Color,
      colors: colors,
      colorSet: setColors
    }}>
      {children}
    </PlayerContext.Provider>
  )

}

export default PlayerProvider;