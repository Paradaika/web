import { ButtonStyles } from './Button.styles';

import { themes } from 'domain/styles/themes';

import { render, screen } from '@testing-library/react';

describe('Styled buttons', () => {
  it('should render styled button', () => {
    render(<ButtonStyles.StyledButton></ButtonStyles.StyledButton>);
  });

  it('should have default color main (orangish)', () => {
    const BUTTON_TEXT = 'My Button';
    render(<ButtonStyles.StyledButton theme={themes.defaultTheme}>{BUTTON_TEXT}</ButtonStyles.StyledButton>);

    const button = screen.getByRole('button');

    expect(button).toHaveStyle(`color: ${themes.defaultTheme.main}`);
  });

  it('should render a grey button on disabled', () => {
    const BUTTON_TEXT = 'My Button';
    render(
      <ButtonStyles.StyledButton disabled theme={themes.defaultTheme}>
        {BUTTON_TEXT}
      </ButtonStyles.StyledButton>
    );

    const disabledButton = screen.getByRole('button');

    expect(disabledButton).toHaveStyle(`color: ${themes.defaultTheme.grey}`);
  });
});
