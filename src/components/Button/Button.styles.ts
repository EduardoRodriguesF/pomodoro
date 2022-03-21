import styled, { css } from 'styled-components';

interface IButtonStyleProps {
  variant: 'primary' | 'secondary' | 'text';
}

export const Wrapper = styled.button<IButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 16px;
  transition: 0.35s;

  ${({ variant }) => {
    let result;
    if (variant === 'primary') {
      result = css`
        color: #fff;
        background: #1b2530;
      `;
    } else if (variant === 'secondary') {
      result = css`
        background: #fff;
      `;
    }

    return result;
  }}

  ${({ variant }) =>
    variant !== 'text' &&
    css`
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);

      &:not(:disabled) {
        &:hover:not(:active) {
          transform: translateY(-1px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
      }
    `}

  &:active {
    opacity: 0.9;
    transition: 0.1s;
  }

  &:disabled {
    cursor: initial;
    opacity: 0.5;
  }
`;
