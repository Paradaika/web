import ReactDOM from 'react-dom';
import { ReactNode, ReactPortal } from 'react';

import { render } from '@testing-library/react';

import { Body } from '../Body';

describe('Body', () => {
  it('should render body component', () => {
    ReactDOM.createPortal = jest.fn((element: ReactNode, node: Element | DocumentFragment) => {
      return element;
    }) as (children: ReactNode, container: Element | DocumentFragment, key?: string | null | undefined) => ReactPortal;

    render(<Body />);
  });
});
