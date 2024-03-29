import ReactDOM from 'react-dom';
import { ReactNode, ReactPortal } from 'react';

import { render } from '@testing-library/react';

import { App } from './App';

describe('App component', () => {
  it('should render App component', () => {
    ReactDOM.createPortal = jest.fn((element: React.ReactNode, node: Element | DocumentFragment) => {
      return element;
    }) as (children: ReactNode, container: Element | DocumentFragment, key?: string | null | undefined) => ReactPortal;

    render(<App />);
  });
});
