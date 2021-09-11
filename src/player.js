import {useContext} from "react"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PlayerContext from "./PlayerContext";

function Player({number}) {

    let color = useContext(PlayerContext)

    return (
        <Card style={{backgroundColor: color}}>
            <CardContent>
                <h1>{"P" + number.toString()}</h1>
            </CardContent>
        </Card>
    )
}

export default Player;