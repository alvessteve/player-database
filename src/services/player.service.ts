/**
 * @format
 */

import axios from 'axios';
import Config from 'react-native-config';
import Player from './model/Player';

export const renderPosition = (positionId: number) => {
  if (positionId === 10) {
    return 'Gardien';
  } else if (positionId === 20) {
    return 'Défenseur';
  } else if (positionId === 21) {
    return 'Latéral';
  } else if (positionId === 31) {
    return 'Milieu Défensif';
  } else if (positionId === 32) {
    return 'Milieu Offensif';
  } else if (positionId === 40) {
    return 'Attaquant';
  }
  return 'Remplaçant';
};

export const fetchPlayers = (url: string): Promise<Array<Player>> => {
  console.log(`${Config.MPG_API_URL}${url}`);
  return axios
    .get(`${Config.MPG_API_URL}${url}`)
    .then(response => response.data);
};

