import React, { Fragment, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop } from './Backdrop';
import { Overlay } from './Overlay';

import { ModalStyles } from './Modal.styles';

interface PropsModal {
  children: ReactNode;
  onBackDropsClick: () => undefined | void;
  transparentBackdrop?: boolean;
  center?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
}

const Modal: React.FC<PropsModal> = ({ onBackDropsClick, children, center, left, right, top, transparentBackdrop }) => {
  return (
    <Fragment>
      {createPortal(<Backdrop isTransparent={transparentBackdrop} onClick={onBackDropsClick} />, document.getElementById('backdrop-root')!)}
      {createPortal(
        <Overlay>
          <ModalStyles.StyledModal>{children}</ModalStyles.StyledModal>
        </Overlay>,
        document.getElementById('overlay-root')!
      )}
    </Fragment>
  );
};

export default Modal;
