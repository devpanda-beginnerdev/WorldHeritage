import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Places from './src/Places';

const RootStack = createStackNavigator(
  {
    Places: Places,
  },
  {
    initialRouteName: 'Places',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
