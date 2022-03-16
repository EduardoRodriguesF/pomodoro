import React from 'react';
import { act, render, fireEvent } from '@testing-library/react';
import ModalSettings from './ModalSettings';

describe('ModalSettings component', () => {
  it('should not open modal at first render', () => {
    const { queryByTestId } = render(<ModalSettings />);

    const element = queryByTestId('modal');

    expect(element).toBeNull();
  });
  it('should be able to open modal', () => {
    const { getByTestId, queryByTestId } = render(<ModalSettings />);

    const element = getByTestId('toggleModal');

    act(() => {
      fireEvent.click(element);
    });

    const modal = queryByTestId('modal');

    expect(modal).not.toBeNull();
  });
  it('should be able to close modal', () => {
    const { getByTestId, queryByTestId } = render(<ModalSettings />);

    const element = getByTestId('toggleModal');

    act(() => {
      fireEvent.click(element);
    });

    const closeButton = getByTestId('closeButton');

    act(() => {
      fireEvent.click(closeButton);
    });

    const modal = queryByTestId('modal');

    expect(modal).toBeNull();
  });
});
