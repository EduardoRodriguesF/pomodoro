import React from 'react';

import { IButtonProps } from './Button.types';
import { Wrapper } from './Button.styles';

const Button: React.FC<IButtonProps> = ({
  children,
  title,
  variant = 'primary',
  disabled,
  round,
  ...rest
}) => (
  <Wrapper
    type="button"
    variant={variant}
    aria-label={title}
    disabled={disabled}
    round={round}
    {...rest}
  >
    {children}
  </Wrapper>
);

export default Button;
