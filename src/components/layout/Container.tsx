import React, {ReactNode} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import theme from '../../constants/theme';
import {globalStyle} from '../../styles/global.styles';

interface Props {
  title?: string;
  back?: boolean;
  right?: ReactNode;
  children?: ReactNode;
  haveHeader?: boolean;
}

const Container = (props: Props) => {
  const {back, children, right, title, haveHeader = false} = props;
  return (
    <SafeAreaView style={globalStyle.container}>
      <StatusBar barStyle={'light-content'} />
      <View
        style={[
          styles.containerChilden,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            paddingTop: haveHeader
              ? 0
              : (StatusBar.currentHeight as number) + theme.size[4],
          },
        ]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  containerChilden: {
    marginHorizontal: theme.size[4],
    flex: 1,
  },
});
