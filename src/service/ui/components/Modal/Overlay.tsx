import { ReactNode } from 'react';

import { ModalStyles } from './Modal.styles';

interface PropsOverlay {
  children: ReactNode;
}

export const Overlay: React.FC<PropsOverlay> = ({ children }) => {
  return <ModalStyles.StyledOverlay className={`inner-overlay`}>{children}</ModalStyles.StyledOverlay>;
};
