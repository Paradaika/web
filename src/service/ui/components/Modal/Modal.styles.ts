import styled from 'styled-components';

const StyledModal = styled('div')`
  background: #e0e0e0;
  background: #e0e0e0;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  border-radius: 50px;
  box-shadow: 22px 22px 44px #b1b1b1, -22px -22px 44px #ffffff;
  padding: 2rem;
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
