import React from 'react';
import {StackNavigator} from 'react-navigation';

import Splash from './Splash.js';


const Navigation = StackNavigator({
  Splash: {
    screen: Splash
    } 
});

export default Navigation;