import React, {ReactNode} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {globalStyle} from '../../styles/global.styles';
import theme from '../../constants/theme';

interface Props {
  title?: string;
  back?: boolean;
  right?: ReactNode;
  children?: ReactNode;
}

const Container = (props: Props) => {
  const {back, children, right, title} = props;
  return (
    <SafeAreaView style={globalStyle.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.containerChilden}>{children}</View>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  containerChilden: {
    paddingTop: (StatusBar.currentHeight as number) + theme.size[4],
    marginHorizontal: theme.size[4],
    flex: 1,
  },
});
