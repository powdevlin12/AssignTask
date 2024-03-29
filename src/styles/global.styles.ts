import {Platform, StatusBar, StyleSheet} from 'react-native';
import theme from '../constants/theme';
import {border, fontSize, size} from '../constants/theme/size';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },

  text: {
    fontSize: fontSize.paragraph,
    fontFamily: theme.fontFamilies.MontserratRegular,
    color: theme.colors.text,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  section: {
    marginBottom: size[4],
  },

  inputContainer: {
    backgroundColor: theme.colors.gray,
    borderRadius: border.medium,
    paddingHorizontal: Platform.OS === 'android' ? 12 : 14,
    paddingVertical: Platform.OS === 'android' ? 12 : 14,
  },

  tag: {
    paddingHorizontal: size[4],
    paddingVertical: size[3],
    borderRadius: border.large,
    backgroundColor: theme.colors.blue,
  },

  card: {
    borderRadius: theme.border.medium,
    flex: 1,
  },

  card: {
    padding: 12,
    borderRadius: 12,
  },
});
