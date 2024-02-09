import {ArrowDown2, CloseCircle, SearchNormal} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, Modal, StatusBar, StyleSheet, View} from 'react-native';
import theme from '../../constants/theme';
import {useToggleModal} from '../../hooks/common';
import {SelectModel} from '../../models';
import {ItemMember} from '../../screens/task/components';
import {globalStyle} from '../../styles/global.styles';
import lodash from '../../utils/lodash';
import {TextComponent, TitleComponent} from '../Text';
import {ButtonComponent} from '../button';
import {InputComponent} from '../input';
import {RowComponent, SectionComponent, SpaceComponent} from '../layout';

interface Props {
  title?: string;
  items: SelectModel[];
  selected: string[];
  onSelect: (val: string[]) => void;
  multiple?: boolean;
}

const DropdownPickerComponent = ({
  items,
  multiple,
  onSelect,
  selected,
  title,
}: Props) => {
  console.log('🚀 ~ selected:', selected);
  const {isShowModal, toggleModal} = useToggleModal();
  const [dataSelected, setDataSelected] = useState<string[]>([]);

  const handleSelectMember = (memberId: string) => {
    const index = dataSelected.findIndex(item => item === memberId);
    const selectedDataCopy = [...dataSelected];
    if (index !== -1) {
      selectedDataCopy.splice(index, 1);
      setDataSelected(selectedDataCopy);
    } else {
      if (multiple) {
        setDataSelected(prev => [...prev, memberId]);
      } else {
        setDataSelected([memberId]);
      }
    }
  };

  const handleRemoveItem = (id: string) => () => {
    const dataSelectedCopy = [...dataSelected].filter(item => item !== id);
    setDataSelected(dataSelectedCopy);
    onSelect(dataSelectedCopy);
  };

  const handleConfirm = () => {
    onSelect(dataSelected);
    setDataSelected([]);
    toggleModal();
  };

  const renderItemSelected = (id: string, index: number) => {
    const item = items.find(itemSelected => itemSelected.value === id);

    return (
      <RowComponent
        key={`${item?.value}-${index}`}
        styles={{
          backgroundColor: theme.colors.gray2,
          padding: theme.size[2],
          marginRight: theme.size[2],
          borderRadius: theme.border.large,
          marginBottom: theme.size[2],
        }}
        onPress={handleRemoveItem(id)}>
        <TextComponent text={item?.label as string} flex={0} />
        <SpaceComponent width={theme.size[2]} />
        <CloseCircle color={theme.colors.danger} size={20} />
      </RowComponent>
    );
  };

  useEffect(() => {
    selected && setDataSelected(selected);
  }, [isShowModal, selected]);

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
          {!lodash.isEmpty(selected) ? (
            <RowComponent
              justifyContent="flex-start"
              styles={{flexWrap: 'wrap', flex: 1}}>
              {selected.map((itemSelected, index) =>
                renderItemSelected(itemSelected, index),
              )}
            </RowComponent>
          ) : (
            <TextComponent text="Assign task for member" />
          )}
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
              <ItemMember
                label={item.label}
                value={item.value}
                handleSelectMember={handleSelectMember}
                isSelected={
                  dataSelected.findIndex(
                    itemData => itemData === item.value,
                  ) !== -1
                }
              />
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
          <ButtonComponent onPress={handleConfirm} title="Confirm" />
        </View>
      </Modal>
    </View>
  );
};

export default DropdownPickerComponent;

const styles = StyleSheet.create({});
