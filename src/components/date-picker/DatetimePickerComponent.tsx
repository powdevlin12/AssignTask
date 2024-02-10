import {ArrowDown2} from 'iconsax-react-native';
import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {WIDTH} from '../../constants/dimension';
import theme from '../../constants/theme';
import {useToggleModal} from '../../hooks/common';
import {globalStyle} from '../../styles/global.styles';
import lodash from '../../utils/lodash';
import {TextComponent, TitleComponent} from '../Text';
import {ButtonComponent} from '../button';
import {RowComponent, SpaceComponent} from '../layout';

interface Props {
  type?: 'date' | 'time' | 'datetime';
  title?: string;
  placeholder?: string;
  selected?: Date;
  onSelect: (val: Date) => void;
}

const DatetimePickerComponent = ({
  onSelect,
  placeholder,
  selected,
  title,
  type,
}: Props) => {
  const {isShowModal, toggleModal, date, setDate} = useToggleModal();

  const confirmDatehandle = () => {
    onSelect(date);
    toggleModal();
  };

  return (
    <View>
      {!lodash.isEmpty(title) && (
        <TitleComponent
          text={title as string}
          flex={0}
          size={theme.fontSize.paragraph}
        />
      )}
      <SpaceComponent height={theme.size[3]} />
      <RowComponent
        onPress={toggleModal}
        styles={[globalStyle.inputContainer, {paddingVertical: theme.size[4]}]}
        justifyContent="space-between">
        <TextComponent
          text={
            selected
              ? type === 'time'
                ? `${selected.getHours()}:${
                    selected.getMinutes() < 10
                      ? '0' + selected.getMinutes()
                      : selected.getMinutes()
                  }`
                : `${
                    selected.getDate() > 9
                      ? selected.getDate()
                      : '0' + selected.getDate()
                  }/${selected.getMonth() + 1}/ ${selected.getFullYear()}`
              : !lodash.isEmpty(placeholder)
              ? (placeholder as string)
              : ''
          }
          color={selected ? theme.colors.text : '#676767'}
          flex={1}
        />
        <ArrowDown2 size={20} color={theme.colors.text} />
      </RowComponent>
      <Modal visible={isShowModal} transparent animationType="slide">
        <View style={styles.container}>
          <View style={styles.modalContainer}>
            <DatePicker
              mode={type}
              date={date}
              onDateChange={date => {
                setDate(date);
              }}
              locale="vi"
              textColor={theme.colors.gray}
              is24hourSource="locale"
            />
            <SpaceComponent height={theme.size[4]} />
            <ButtonComponent
              title="Confirm"
              backgroundColor="transparent"
              color={theme.colors.blue}
              onPress={confirmDatehandle}
            />
            <SpaceComponent height={theme.size[2]} />
            <ButtonComponent
              title="Close"
              backgroundColor="transparent"
              color={theme.colors.blue}
              onPress={toggleModal}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DatetimePickerComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.8)',
  },
  modalContainer: {
    width: WIDTH * 0.8,
    height: WIDTH * 0.8,
    borderRadius: theme.border.medium,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
