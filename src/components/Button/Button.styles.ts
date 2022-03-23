import styled, { css } from 'styled-components';

interface IButtonStyleProps {
  variant: 'primary' | 'secondary' | 'text';
  size: 'content' | 'small' | 'regular' | 'medium' | 'large';
  round: boolean;
}

export const Wrapper = styled.button<IButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  transition: 0.35s;

  ${({ size }) => {
    let result;

    switch (size) {
      case 'content':
        result = css`
          padding: 0;
        `;
        break;
      case 'small':
        result = css`
          font-size: 12px;
          padding: 6px 12px;
          border-radius: 16px;
        `;
        break;
      case 'medium':
        result = css`
          font-size: 20px;
          padding: 16px 32px;
          border-radius: 32px;
        `;
        break;
      case 'large':
        result = css`
          font-size: 32px;
          padding: 24px 48px;
          border-radius: 48px;
        `;
        break;
      default:
        result = css`
          font-size: 16px;
          padding: 10px 20px;
          border-radius: 20px;
        `;
    }

    return result;
  }}

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

  ${({ round }) =>
    round &&
    css`
      aspect-ratio: 1/1;
      border-radius: 50%;
    `}

  &:active {
    opacity: 0.9;
    transition: 0.1s;
    transform: scale(0.98);
  }

  &:disabled {
    cursor: initial;
    opacity: 0.5;
  }
`;
