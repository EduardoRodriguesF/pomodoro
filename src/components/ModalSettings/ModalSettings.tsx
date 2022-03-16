import useSettings from 'hooks/useSettings';
import React, { useCallback, useState } from 'react';
import { FiSettings, FiX } from 'react-icons/fi';

import {
  ModalOverlay,
  Modal,
  OpenModalButton,
  CloseModalButton,
  SettingsItem,
} from './ModalSettings.styles';

const ModalSettings: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { pauseAfterCycle, togglePauseAfterCycle } = useSettings();

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
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
};

export default ModalSettings;
