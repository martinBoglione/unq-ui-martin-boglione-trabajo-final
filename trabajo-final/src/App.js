import { BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Game from './Game';


const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Home" component={Home} />
                <Route path="/Game" component={Game} />
                <Route path="*" component={Home} />
            </Switch>
        </BrowserRouter>
    );

}

export default App;