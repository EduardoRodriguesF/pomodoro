import Button from 'components/Button';
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 300px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  background: #fff;
  border-radius: 8px;
  padding: 12px 16px 16px;
  margin: 0 8px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-weight: 600;
  }
`;

export const SettingsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;

export const BottomNavigation = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const OpenModalButton = styled(Button)`
  position: absolute;
  right: 16px;
  bottom: 16px;
`;
export const CloseModalButton = styled.button``;
