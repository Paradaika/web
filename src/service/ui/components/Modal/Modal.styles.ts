import styled from 'styled-components';

const StyledModal = styled('div')`
  position: relative;
  width: fit-content;
`;

const StyledOverlay = styled('div')`
  position: absolute;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 110;
`;

const StyledBackdrop = styled('div')`
  backdrop-filter: blur(3px);
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 100;
`;

export const ModalStyles = { StyledBackdrop, StyledModal, StyledOverlay };
