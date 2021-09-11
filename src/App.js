import './App.css';
import { useState, createContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Player from "./player";
import PlayerContext from './PlayerContext';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
function App() {

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

  let changeColor = (oldColor, newColor, setColor) => {

    if (colors[newColor]) {
      alert("Color already used dummy!")
      return
    }

    setColors(s => {
      return (oldColor !== null ? {
        ...s,
        [oldColor]: false,
        [newColor]: true
      } : {
        ...s,
        [newColor]: true
      })
    })
    setColor(newColor)
  }

  let generateColorList = (selectedColor) => {
    return (
      [
        ...Object.keys(colors).map((c) => <MenuItem value={c}>{c}</MenuItem>)
      ]

    )
  }

  return (
    <>
      <Container style={{ padding: "5%" }}>
        <h1>Game Lobby Thing</h1>
        <Grid container>
          <Grid item xs={6}>
            <PlayerContext.Provider value={p1Color}>
              <Player number={1} />
            </PlayerContext.Provider>
            <Select value={p1Color} onChange={(ev) => { changeColor(p1Color, ev.target.value, setP1Color) }}>
              {generateColorList(p1Color)}
            </Select>
          </Grid>
          <Grid item xs={6}>
            <PlayerContext.Provider value={p2Color}>
              <Player number={2} />
            </PlayerContext.Provider>
            <Select onChange={(ev) => { changeColor(p2Color, ev.target.value, setP2Color) }}>

              {generateColorList(p2Color)}
            </Select>
          </Grid>
          <Grid item xs={6}>
            <PlayerContext.Provider value={p3Color}>
              <Player number={3} />
            </PlayerContext.Provider>
            <Select onChange={(ev) => { changeColor(p3Color, ev.target.value, setP3Color) }}>
              {generateColorList(p3Color)}
            </Select>
          </Grid>
          <Grid item xs={6}>
            <PlayerContext.Provider value={p4Color}>
              <Player number={4} />
            </PlayerContext.Provider>
            <Select onChange={(ev) => { changeColor(p4Color, ev.target.value, setP4Color) }}>
              {generateColorList(p4Color)}
            </Select>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
