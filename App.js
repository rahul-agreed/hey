import React from 'react';
import {StackNavigator} from 'react-navigation';

import splashscreen from './pages/splashscreen.js';
import login from './pages/components/Login/login.js';
import group from './pages/components/Group/group.js';
import chat from './pages/components/Chat/chat.js';
import authenticate from './pages/components/Authenticate/authenticate.js';

const Navigation = StackNavigator({
  chat: {
    screen: chat
},
  authenticate: {
      screen: authenticate
  },
  group: {
    screen: group
  },
  login: {
    screen: login
  },
  splashscreen: {
      screen: splashscreen
  }
    
});

export default Navigation;