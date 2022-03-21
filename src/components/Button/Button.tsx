import React from 'react';

import { IButtonProps } from './Button.types';
import { Wrapper } from './Button.styles';

const Button: React.FC<IButtonProps> = ({
  children,
  title,
  variant = 'primary',
  disabled,
  ...rest
}) => (
  <Wrapper
    type="button"
    variant={variant}
    aria-label={title}
    disabled={disabled}
    {...rest}
  >
    {children}
  </Wrapper>
);

export default Button;
