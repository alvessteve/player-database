import React, {FunctionComponent, Fragment} from 'react';
import {Avatar, Divider} from 'react-native-elements';
import {Text, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import get from 'lodash/get';
import useCallApi from '../hooks/api';
import Container from '../components/Container';
import {renderPosition} from '../services/player.service';
import LabelValueDisplayer from '../components/LabelValueDisplayer';

const DefaultMargin = {
  margin: 20,
};

const bold = {
  fontWeight: 'bold',
};

const commonMarginTop = {
  marginTop: 10,
};

const styles = StyleSheet.create({
  desc_section: {
    ...DefaultMargin,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stat_section: {
    ...DefaultMargin,
    flex: 2,
  },
  desc_section_content: {
    ...bold,
    ...commonMarginTop,
    fontSize: 20,
  },
  section_title: {
    fontSize: 15,
    color: 'blue',
    marginBottom: 10,
  },
  stat_section_line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const PlayerDetail: FunctionComponent = (): JSX.Element => {
  const playerId: number = useSelector<number>(state => state.players.selected);
  const [{data}] = useCallApi(`/player/${playerId}?season=2018`);
  const stats = get(data, 'stats', {});
  return (
    <Container>
      <View style={styles.desc_section}>
        <Avatar size="xlarge" rounded title={data.jerseyNum} />
        <Text style={styles.desc_section_content}>
          {data.firstname} {data.lastname}
        </Text>
        <Text style={styles.desc_section_content}>
          {data.club} - {renderPosition(data.ultraPosition)}
        </Text>
      </View>
      <Divider />
      <View style={styles.stat_section}>
        <Text style={styles.section_title}>STATISTIQUES</Text>
        <View style={styles.stat_section_line}>
          <Fragment>
            <LabelValueDisplayer
              title={'Titularisations'}
              value={get(stats, 'appearances.total', 'N/A')}
            />
            <LabelValueDisplayer
              title={'Note Moyenne'}
              value={get(stats, 'avgRate', 'N/A')}
            />
            <LabelValueDisplayer
              title={'Arrêts'}
              value={get(stats, 'sumSaves', 'N/A')}
            />
          </Fragment>
        </View>
      </View>
    </Container>
  );
};

export default PlayerDetail;
