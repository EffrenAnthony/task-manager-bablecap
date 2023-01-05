import React from 'react';
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

interface ModalComponentProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  title: string;
  children: React.ReactNode;
}
const ModalComponent = ({
  modalIsOpen,
  closeModal,
  title,
  children,
}: ModalComponentProps) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={title}
      >
        {children}
      </Modal>
    </div>
  );
};

export default ModalComponent;
