import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';

import Dashboard from './screens/Dashboard';
import Subscriptions from './screens/Subscriptions';
import Profile from './screens/Profile';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          LogIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Subscriptions,
            Profile,
          },
          {
            mode: 'modal',
            transparentCard: true,
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#E5556E',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#22202C',
                height: 68,
                paddingTop: 8,
                paddingBottom: 12,
                elevation: 12,
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
