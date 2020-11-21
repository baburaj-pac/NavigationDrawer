import React from 'react';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import BuildIcon from '@material-ui/icons/Build';

const Home: React.FC = () => {
  return (
    <h1>    Home</h1>
  );
};

const Standings: React.FC = () => {
  return (
    <h1>Standings1</h1>
  );
};

const Teams: React.FC = () => {
  return (
    <h1>Teams</h1>
  );
};

const Routes = [
  {
    path: '/home',
    sidebarName: '1Home',
    component: Home,
    icon:<AccountBalanceIcon/>,

  },
  {
    path: '/standings',
    sidebarName: 'Standings',
    component: Standings,
    icon:<AirplanemodeActiveIcon/>,
  },
  {
    path: '/teams',
    sidebarName: 'Teams',
    component: Teams,
    icon:<BuildIcon/>,
  },
];

export default Routes;

