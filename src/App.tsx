import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Routes from './Routes/Routes'

import NavigationBar from './NavigationBar/NavigationBar'

const App: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <Switch>
        {Routes.map((route: any) => (
          <Route exact path={route.path} key={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </div>
  );
}

export default App;
