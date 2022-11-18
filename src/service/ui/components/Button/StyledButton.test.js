import { Styles } from './Button.styles';

import { themes } from 'domain/styles/themes';

import { render, screen } from '@testing-library/react';

describe('Styled buttons', () => {
  it('should render styled button', () => {
    render(<Styles.StyledButton></Styles.StyledButton>);
  });

  it('should have default color main (orangish)', () => {
    const BUTTON_TEXT = 'My Button';
    render(<Styles.StyledButton theme={themes.defaultTheme}>{BUTTON_TEXT}</Styles.StyledButton>);

    const button = screen.getByRole('button');

    expect(button).toHaveStyle(`color: ${themes.defaultTheme.main}`);
  });

  it('should render a grey button on disabled', () => {
    const BUTTON_TEXT = 'My Button';
    render(
      <Styles.StyledButton disabled theme={themes.defaultTheme}>
        {BUTTON_TEXT}
      </Styles.StyledButton>
    );

    const disabledButton = screen.getByRole('button');

    expect(disabledButton).toHaveStyle(`color: ${themes.defaultTheme.grey}`);
  });
});
