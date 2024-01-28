import {
  FlatList,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SelectModel} from '../../models';
import lodash from '../../utils/lodash';
import {TextComponent, TitleComponent} from '../Text';
import theme from '../../constants/theme';
import {RowComponent, SectionComponent} from '../layout';
import {ArrowDown2, SearchNormal} from 'iconsax-react-native';
import {globalStyle} from '../../styles/global.styles';
import {useToggleModal} from '../../hooks/common';
import {ButtonComponent} from '../button';
import {ItemMember} from '../../screens/task/components';
import {InputComponent} from '../input';

interface Props {
  title?: string;
  items: SelectModel[];
  selected?: SelectModel[];
  onSelect?: (val: string[]) => void;
  multiple?: boolean;
}

const DropdownPickerComponent = ({
  items,
  multiple,
  onSelect,
  selected,
  title,
}: Props) => {
  const {isShowModal, toggleModal} = useToggleModal();

  return (
    <View>
      {!lodash.isEmpty(title) && (
        <SectionComponent styles={{marginBottom: theme.size[3]}}>
          <TitleComponent
            text={title as string}
            flex={0}
            size={theme.fontSize.paragraph}
          />
        </SectionComponent>
      )}
      <SectionComponent>
        <RowComponent
          justifyContent="space-between"
          styles={[globalStyle.inputContainer]}
          onPress={toggleModal}>
          <TextComponent text="Assign task for member" />
          <ArrowDown2 color={theme.colors.text} size={22} />
        </RowComponent>
      </SectionComponent>
      <Modal
        visible={isShowModal}
        statusBarTranslucent
        style={{flex: 1}}
        animationType="slide"
        transparent>
        <View
          style={[
            globalStyle.container,
            {
              paddingTop: (StatusBar.currentHeight as number) + theme.size[3],
              marginHorizontal: theme.size[4],
            },
          ]}>
          <FlatList
            data={items}
            renderItem={({item}) => (
              <ItemMember label={item.label} value={item.value} />
            )}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <RowComponent>
                <View style={{flex: 1}}>
                  <InputComponent
                    value=""
                    changeValueHandle={val => console.log(val)}
                    prefix={
                      <SearchNormal size={22} color={theme.colors.text} />
                    }
                    placeholder="Search member here ..."
                    allowClear={true}
                  />
                </View>
              </RowComponent>
            }
          />
          <ButtonComponent onPress={toggleModal} title="Confirm" />
        </View>
      </Modal>
    </View>
  );
};

export default DropdownPickerComponent;

const styles = StyleSheet.create({});
