import { Styles } from './Button.styles';

import { themes } from 'domain/styles/themes';

import { render } from '@testing-library/react';

describe('Styled buttons', () => {
  it('should render styled button', () => {
    render(<Styles.StyledButton></Styles.StyledButton>);
  });
});
