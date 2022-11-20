import { render } from '@testing-library/react';

import { TodoInput } from '../TodoInput';

describe('Todo Input', () => {
  it('should render TodoInput', () => {
    render(<TodoInput />);
  });
});
