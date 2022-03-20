import React from 'react';
import { render } from '@testing-library/react';
import ProgressRing from '.';

describe('ProgressRing component', () => {
  it('should be able to render progress ring', () => {
    const { getByTestId } = render(<ProgressRing progress={50} />);

    const element = getByTestId('progress');

    expect(element).not.toBeNull();
  });
});
