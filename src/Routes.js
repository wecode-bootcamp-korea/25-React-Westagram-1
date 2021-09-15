import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginChanYoung from './pages/chanyoung/Login/Login';
import MainChanYoung from './pages/chanyoung/Main/Main';

import LoginSangCheol from './pages/sangcheol/Login/Login';
import MainSangCheol from './pages/sangcheol/Main/Main';

import LoginMiYeon from './pages/miyeon/Login/Login';
import MainMiYeon from './pages/miyeon/Main/Main';

import LoginKyungHyun from './pages/kyunghyun/Login/Login';
import MainKyungHyun from './pages/kyunghyun/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Login-ChanYoung" component={LoginChanYoung}></Route>
          <Route exact path="/Main-ChanYoung" component={MainChanYoung}></Route>

          <Route exact path="/Login-SangCheol" component={LoginSangCheol}></Route>
          <Route exact path="/Main-SangCheol" component={MainSangCheol}></Route>

          <Route exact path="/Login-MiYeon" component={LoginMiYeon}></Route>
          <Route exact path="/Main-MiYeon" component={MainMiYeon}></Route>

          <Route exact path="/Login-KyungHyun" component={LoginKyungHyun}></Route>
          <Route exact path="/Main-KyungHyun" component={MainKyungHyun}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
