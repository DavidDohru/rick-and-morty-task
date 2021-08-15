import { composeWithDevTools } from 'redux-devtools-extension';
import {combineReducers, createStore} from 'redux';
import { reducer as characterReducer } from "./characterReducer/reducer";
import { reducer as episodeReducer } from './episodesReducer/reducer';
import { reducer as locationReducer } from './locationReducer/reducer';
import { reducer as myWatchListReducer } from './MyWatchListReducer/reducer';
const combineReducer = combineReducers({
  characterReducer,
  episodeReducer,
  locationReducer,
  myWatchListReducer,
});
export const store = createStore(combineReducer,composeWithDevTools());