import React, { useCallback, useState } from 'react';
import { FiSettings, FiX } from 'react-icons/fi';

import {
  ModalOverlay,
  Modal,
  OpenModalButton,
  CloseModalButton,
} from './ModalSettings.styles';

const ModalSettings: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <OpenModalButton
        type="button"
        onClick={handleModalToggle}
        data-testid="toggleModal"
      >
        <FiSettings size={32} />
      </OpenModalButton>
      {isOpen && (
        <ModalOverlay data-testid="modal">
          <Modal>
            <CloseModalButton
              type="button"
              onClick={handleModalToggle}
              data-testid="closeButton"
            >
              <FiX size={32} />
            </CloseModalButton>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
};

export default ModalSettings;
