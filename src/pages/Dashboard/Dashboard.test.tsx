import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard page', () => {
  it('should render Dashboard without crashing', () => {
    const { container } = render(<Dashboard />);

    const title = container.querySelector('h1');

    expect(title).not.toBeNull();
  });
});
