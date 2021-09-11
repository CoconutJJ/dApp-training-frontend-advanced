import { useState, createContext, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Player from "./player";
import {PlayerContext} from './PlayerContext';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
function Lobby() {

    let {
        p1,
        p1Set,
        p2,
        p2Set,
        p3,
        p3Set,
        p4,
        p4Set,
        colors,
        colorSet
    } = useContext(PlayerContext);

    let changeColor = (oldColor, newColor, setColor) => {

        if (colors[newColor]) {
            alert("Color already used dummy!")
            return
        }

        colorSet(s => {
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
                        <Player number={1} color={p1} />
                        <Select value={p1} onChange={(ev) => { changeColor(p1, ev.target.value, p1Set) }}>
                            {generateColorList(p1)}
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <Player number={2} color={p2} />
                        <Select onChange={(ev) => { changeColor(p2, ev.target.value, p2Set) }}>
                            {generateColorList(p2)}
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <Player number={3} color={p3} />
                        <Select onChange={(ev) => { changeColor(p3, ev.target.value, p3Set) }}>
                            {generateColorList(p3)}
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <Player number={4} color={p4} />
                        <Select onChange={(ev) => { changeColor(p4, ev.target.value, p4Set) }}>
                            {generateColorList(p4)}
                        </Select>
                    </Grid>
                </Grid>
            </Container>
        </>
    );

}

export default Lobby;