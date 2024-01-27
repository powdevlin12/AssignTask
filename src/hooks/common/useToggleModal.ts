import {useState} from 'react';

const useToggleModal = (selected?: Date) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(selected ?? new Date());

  const toggleModal = () => {
    setIsShowModal(prev => !prev);
  };

  return {
    isShowModal,
    toggleModal,
    date,
    setDate,
  };
};

export default useToggleModal;
