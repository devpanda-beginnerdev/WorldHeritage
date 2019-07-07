import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Places from './src/Places';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware, reducer } from './src/redux';

// Redux storeを作る
const store = createStore(reducer, {}, applyMiddleware(apiMiddleware));

// placeデータを取得する
store.dispatch({type: 'GET_PLACE_DATA'});


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
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
