import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 150px;

  input {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }
`;
