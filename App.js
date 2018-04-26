import React from 'react';
import {StackNavigator} from 'react-navigation';

import splashscreen from './pages/splashscreen.js';
import login from './pages/components/Login/login.js';
import group from './pages/components/Group/group.js';

const Navigation = StackNavigator({
  login: {
    screen: login
  },
  group: {
    screen: group
  },
  splashscreen: {
      screen: splashscreen
  }
    
});

export default Navigation;