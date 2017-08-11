import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import MainView from '../views/Main';
import MinorView from '../views/Minor';
import bouncingBallView from '../views/BouncingBall';

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/main" />
            <Route path="main" component={MainView}> </Route>
            {/*<Route path="minor" component={MinorView}> </Route>*/}
            <Route path="bouncingBall" component={bouncingBallView}> </Route>
        </Route>
    </Router>

);