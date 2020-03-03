import React, {PureComponent} from 'react';
import {Text, StyleSheet, View} from 'react-native';

const statDisplayStyles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  value: {
    color: 'black',
  },
});

const LabelValueDisplayer: PureComponent = ({title, value, containerStyle, titleStyle, valueTextStyle}): JSX.Element => {
  return (
    <View style={containerStyle}>
      <Text style={[statDisplayStyles.label, titleStyle]}>{title}</Text>
      <Text style={[statDisplayStyles.value, valueTextStyle]}>{value}</Text>
    </View>
  );
};

export default LabelValueDisplayer;
