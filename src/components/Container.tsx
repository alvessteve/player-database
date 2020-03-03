import React, {FunctionComponent} from 'react';
import {ViewStyle, SafeAreaView, StyleProp, StyleSheet} from 'react-native';

interface ContainerProps {
  children: Element[];
  style?: StyleProp<ViewStyle>;
}

interface Styles {
  container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const Container: FunctionComponent<ContainerProps> = ({
  children,
  style,
}): JSX.Element => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

export default Container;
