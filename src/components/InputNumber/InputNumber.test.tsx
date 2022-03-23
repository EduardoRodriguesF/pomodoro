import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import InputNumber from './InputNumber';

describe('InputNumber component', () => {
  it('should be able to set a default value', () => {
    const { getByTestId } = render(<InputNumber defaultValue={4} />);

    const input = getByTestId('input');

    expect(input).toHaveValue('4');
  });
  it('should be able to increase value', () => {
    const { getByTestId } = render(<InputNumber />);

    const increaseButton = getByTestId('increase');
    const input = getByTestId('input');

    expect(input).toHaveValue('1');

    fireEvent.click(increaseButton);

    expect(input).toHaveValue('2');
  });
  it('should be able to decrease value', () => {
    const { getByTestId } = render(<InputNumber />);

    const increaseButton = getByTestId('decrease');
    const input = getByTestId('input');

    expect(input).toHaveValue('1');

    fireEvent.click(increaseButton);

    expect(input).toHaveValue('0');
  });
  it('should not allow negatives by default', () => {
    const { getByTestId } = render(<InputNumber />);

    const increaseButton = getByTestId('decrease');
    const input = getByTestId('input');

    expect(input).toHaveValue('1');

    fireEvent.click(increaseButton);

    expect(input).toHaveValue('0');

    fireEvent.click(increaseButton);

    expect(input).toHaveValue('0');
  });
  it('should be able to allow negatives', () => {
    const { getByTestId } = render(<InputNumber allowNegatives />);

    const decrease = getByTestId('decrease');
    const input = getByTestId('input');

    expect(input).toHaveValue('1');

    fireEvent.click(decrease);

    expect(input).toHaveValue('0');

    fireEvent.click(decrease);

    expect(input).toHaveValue('-1');
  });
  it('should be able to set mininum value', () => {
    const { getByTestId } = render(<InputNumber min={1} defaultValue={2} />);

    const decrease = getByTestId('decrease');
    const input = getByTestId('input');

    expect(input).toHaveValue('2');

    fireEvent.click(decrease);

    expect(input).toHaveValue('1');

    fireEvent.click(decrease);

    expect(input).toHaveValue('1');
  });
  it('should be able to set maxinum value', () => {
    const { getByTestId } = render(<InputNumber max={3} />);

    const increase = getByTestId('increase');
    const input = getByTestId('input');

    expect(input).toHaveValue('1');

    fireEvent.click(increase);

    expect(input).toHaveValue('2');

    fireEvent.click(increase);

    expect(input).toHaveValue('3');

    fireEvent.click(increase);

    expect(input).toHaveValue('3');
  });
});
