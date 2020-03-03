import Player from 'src/services/model/Player';
import {SELECT_PLAYER} from './ActionTypes';

interface State {
  selected: Player;
}

interface Action {
  type: string;
  id: number;
}

const initialState = {
  selected: {},
};

const players = (state: State = initialState, action: Action) => {
  if (action.type == SELECT_PLAYER) {
    return {
      ...state,
      selected: action.id,
    };
  } else {
    return state;
  }
};

export default players;
