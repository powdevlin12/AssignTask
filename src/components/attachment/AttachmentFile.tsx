import {DocumentUpload} from 'iconsax-react-native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import theme from '../../constants/theme';
import {TextComponent} from '../Text';
import {SpaceComponent} from '../layout';

interface IAttachmentFileProps {
  pickDocumentsHandle: (attachments: Array<DocumentPickerResponse>) => Function;
}

const AttachmentFile = ({pickDocumentsHandle}: IAttachmentFileProps) => {
  const pickFilesHandler = async () => {
    try {
      const response = await DocumentPicker.pick({
        allowMultiSelection: true,
        type: DocumentPicker.types.allFiles,
      });
      pickDocumentsHandle(response)();
    } catch (error) {
      console.log('🚀 ~ pickFilesHandler ~ error:', error);
    }
  };

  return (
    <TouchableOpacity onPress={pickFilesHandler} style={styles.container}>
      <DocumentUpload size="32" color={theme.colors.text} />
      <SpaceComponent width={theme.size[3]} />
      <TextComponent text="Choose files attachment for task" flex={0} />
    </TouchableOpacity>
  );
};

export default AttachmentFile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.size[3],
    borderWidth: 2,
    borderColor: theme.colors.text,
    borderStyle: 'dashed',
    borderRadius: theme.border.medium,
    backgroundColor: theme.colors.gray2,
  },
});
