import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Risk_Report from './Pages/Risk_Report/risk-report';
import Welcome from './Pages/Welcome/welcome';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Welcome}></Route>
      <Route exact path='/risk-report' component={Risk_Report}></Route>
    </Switch>
  );
}

export default Main;