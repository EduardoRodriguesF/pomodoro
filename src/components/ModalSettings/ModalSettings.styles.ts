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
  max-width: 300px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  background: #fff;
  border-radius: 16px;
`;

export const OpenModalButton = styled.button`
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  width: 72px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  transition: 0.35s;

  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;
export const CloseModalButton = styled.button``;
