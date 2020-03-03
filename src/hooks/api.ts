import {useEffect, useState} from 'react';
import {fetchPlayers} from '../services/player.service';
import Player from '../services/model/Player';

const useCallApi = (initialUrl: string) => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isError, setIsError] = useState<Boolean>(false);
  const [data, setData] = useState<Array<Object>>([]);
  const [url, setUrl] = useState<string>(initialUrl);

  useEffect(() => {
    const getPlayers = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const playersFetched: Array<Player> = await fetchPlayers(url);
        setData(playersFetched);
      } catch (error) {
        console.error(error);
        setIsError(true);
      }
      setIsLoading(false);
    };
    getPlayers();
  }, [url]);
  return [{data, isLoading, isError}, setUrl];
};

export default useCallApi;
