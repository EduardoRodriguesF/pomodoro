import Button from 'components/Button';
import useSettings from 'hooks/useSettings';
import React, { useCallback, useState } from 'react';
import { FiSettings, FiX } from 'react-icons/fi';

import {
  ModalOverlay,
  Modal,
  OpenModalButton,
  SettingsItem,
  BottomNavigation,
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
        title="Settings"
        variant="secondary"
        round
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
              <Button
                title="Close"
                variant="text"
                size="content"
                onClick={handleModalToggle}
                data-testid="closeButton"
              >
                <FiX size={20} />
              </Button>
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
              <Button
                title="Ok"
                variant="text"
                size="content"
                onClick={handleModalToggle}
              >
                OK
              </Button>
            </BottomNavigation>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
};

export default ModalSettings;
