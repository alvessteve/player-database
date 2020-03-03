/**
 * @format
 */

import React, {FunctionComponent, useState, useEffect} from 'react';
import {ListItem, SearchBar, Text} from 'react-native-elements';
import {FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import filter from 'lodash/filter';
import useCallApi from '../hooks/api';
import Container from '../components/Container';
import Loader from '../components/Loader';
import Player from '../services/model/Player';

const renderPlayerItem = ({item}, configuration) => (
  <ListItem
    title={`${item.firstname ? item.firstname : ''} ${
      item.lastname ? item.lastname : ''
    }`}
    subtitle={`${item.club}`}
    onPress={() => {
      configuration.dispatch({
        type: 'SELECT_PLAYER',
        id: item.id.replace('player_', ''),
      });
      configuration.navigation.navigate('Player');
    }}
    chevron
    bottomDivider
  />
);

const PlayerList: FunctionComponent = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchedName, setSearchedName] = useState<string>('');
  const [{data, isLoading, isError}] = useCallApi('/championship/1/2018');
  const [filteredPlayerList, setFilteredPlayerList] = useState<Array<Player>>(
    [],
  );

  useEffect(() => {
    setFilteredPlayerList(data);
  }, [data]);

  useEffect(() => {
    const valueToSearch = searchedName.toLowerCase().trim();
    if (valueToSearch.length < 3) {
      setFilteredPlayerList(data);
    }
    if (valueToSearch.length >= 3) {
      const filteredList = filter(data, (player: Player) => {
        return (
          (player.firstname &&
            player.firstname.toLowerCase().includes(valueToSearch)) ||
          (player.lastname &&
            player.lastname.toLowerCase().includes(valueToSearch))
        );
      });
      setFilteredPlayerList(filteredList);
    }
  }, [searchedName, data]);

  return (
    <Container>
      <SearchBar
        lightTheme
        placeholder="Type Here..."
        onChangeText={search => setSearchedName(search)}
        value={searchedName}
      />
      {isError && <Text h3>Something went wrong...</Text>}
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          maxToRenderPerBatch={20}
          removeClippedSubviews
          data={filteredPlayerList}
          keyExtractor={(item: Player) => item.id}
          renderItem={item => renderPlayerItem(item, {dispatch, navigation})}
        />
      )}
    </Container>
  );
};

export default PlayerList;
