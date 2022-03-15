import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  width: 100px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  transition: 0.35s;

  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;
