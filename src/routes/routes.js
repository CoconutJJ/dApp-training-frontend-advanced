import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PlayerProvider from "../components/PlayerContext";
import Lobby from "../components/lobby";

function Routes() {

    return (
        <Router>
            <Switch>
                <Route path="" exact>
                    <PlayerProvider>
                        <Lobby />
                    </PlayerProvider>
                </Route>
            </Switch>
        </Router>
    )

}

export default Routes;