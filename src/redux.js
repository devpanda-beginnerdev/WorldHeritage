import { Platform } from 'react-native';

const API = Platform.OS === 'android'
  ? 'http://10.0.3.2:3000/v1' // Androidエミュレーター用
  : 'http://localhost:3000/v1';

export const apiMiddleware = store => next => action => {
  // 全てのアクションを受け取る
  next(action);
  switch (action.type) {
    // APIリクエストを送るアクションを受け取った時
    case 'GET_PLACE_DATA':
      // GET_PLACE_DATA_LOADINGでget loading stateを更新する
      store.dispatch({type: 'GET_PLACE_DATA_LOADING'});
      // APIを呼び出し、処理が終わったら次のアクションをdispatchする
      fetch(`${API}/places.json`)
        .then(response => response.json())
        .then(data => next({
          type: 'GET_PLACE_DATA_RECEIVED',
          data
        }))
        .catch(error => next({
          type: 'GET_PLACE_DATA_ERROR',
          error
        }));
      break;
    
    default:
      break;
  }
};

//dispatch処理後に呼び出すreducer
export const reducer = (state = { places: [], loading: true }, action) => {
    switch (action.type) {
      case 'GET_PLACE_DATA_LOADING':
        return {
          ...state,                   // 既存のstateを維持
          loading: true,              // loadingをtrueに変更
        };
      case 'GET_PLACE_DATA_RECEIVED':
        return {
          loading: false,             // loadingをfalseに変更
          places: action.data.places, // APIのレスポンスのデータでplacesを更新
        };
      case 'GET_PLACE_DATA_ERROR':
        return state;
      default:
        return state;
      }
  };
