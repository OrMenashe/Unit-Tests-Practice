import { render } from '@testing-library/react';

import Calculator from './calculator';

describe('Calculator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Calculator />);
    expect(baseElement).toBeTruthy();
  });
});
