import { render, screen } from '@testing-library/react';

import { Typography } from './Typography.js';

describe('Typography component', () => {
  it('should render the component', () => {
    render(<Typography>Hello World</Typography>);

    expect(screen.getByText('Hello World')).toBeTruthy();
  });
});
