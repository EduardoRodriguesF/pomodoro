import Button from 'components/Button';
import React, { useCallback, useEffect, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

import { Wrapper } from './InputNumber.styles';
import { IInputNumberProps } from './InputNumber.types';

const InputNumber: React.FC<IInputNumberProps> = ({
  defaultValue = 1,
  min,
  max,
  allowNegatives,
  onChange = () => null,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleDecrease = useCallback(() => {
    if (value <= 0 && !allowNegatives) return;

    let newValue = value - 1;

    if (min) newValue = Math.max(newValue, min);

    setValue(newValue);
  }, [value, min, allowNegatives]);

  const handleIncrease = useCallback(() => {
    if (max && value >= max) return;

    let newValue = value + 1;

    if (max) newValue = Math.min(newValue, max);

    setValue(newValue);
  }, [value, max]);

  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <Wrapper>
      <Button
        title="Decrease"
        round
        data-testid="decrease"
        size="content"
        onClick={handleDecrease}
        disabled={(!!min && value <= min) || (!allowNegatives && value <= 0)}
      >
        <FiMinus size={16} />
      </Button>
      <input type="text" readOnly value={value} data-testid="input" />
      <Button
        title="Increase"
        round
        data-testid="increase"
        size="content"
        onClick={handleIncrease}
        disabled={!!max && value >= max}
      >
        <FiPlus size={16} />
      </Button>
    </Wrapper>
  );
};

export default InputNumber;
