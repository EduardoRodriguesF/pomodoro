import useSettings from 'hooks/useSettings';
import React, { useCallback, useState } from 'react';
import { FiSettings, FiX } from 'react-icons/fi';

import {
  ModalOverlay,
  Modal,
  OpenModalButton,
  CloseModalButton,
  SettingsItem,
  BottomNavigation,
  ConfirmationButton,
} from './ModalSettings.styles';

const ModalSettings: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { pauseAfterCycle, togglePauseAfterCycle } = useSettings();

  const handleModalToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleClickOutsideModal = useCallback(e => {
    if (e.target !== e.currentTarget) return;

    setIsOpen(false);
  }, []);

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
        <ModalOverlay onClick={handleClickOutsideModal} data-testid="modal">
          <Modal>
            <header>
              <span>Settings</span>
              <CloseModalButton
                type="button"
                onClick={handleModalToggle}
                data-testid="closeButton"
              >
                <FiX size={20} />
              </CloseModalButton>
            </header>
            <SettingsItem>
              <span>Pause after cycle ends</span>
              <input
                type="checkbox"
                onChange={togglePauseAfterCycle}
                defaultChecked={pauseAfterCycle}
                data-testid="togglePauseAfterCycle"
              />
            </SettingsItem>
            <BottomNavigation>
              <ConfirmationButton onClick={handleModalToggle}>
                OK
              </ConfirmationButton>
            </BottomNavigation>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
};

export default ModalSettings;
