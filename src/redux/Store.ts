import {combineReducers, createStore} from 'redux';
import players from './players/Reducers';

const rootReducer = combineReducers({
  players,
});

const store = createStore(rootReducer);

export default store;
