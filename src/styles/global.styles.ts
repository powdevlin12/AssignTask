import {Platform, StatusBar, StyleSheet} from 'react-native';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fontFamilies';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 20,
    paddingTop: StatusBar.currentHeight,
  },

  text: {
    fontSize: 14,
    fontFamily: fontFamilies.MontserratRegular,
    color: colors.text,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  section: {
    marginBottom: 16,
  },

  inputContainer: {
    backgroundColor: colors.gray,
    borderRadius: 12,
    paddingHorizontal: Platform.OS === 'android' ? 12 : 14,
    paddingVertical: Platform.OS === 'android' ? 12 : 14,
  },
});
