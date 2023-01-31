import { ModalStyles } from './Modal.styles';

interface BackdropProps {
  onClick: () => void | undefined;
  isTransparent?: boolean;
}

export const Backdrop = ({ onClick, isTransparent }: BackdropProps) => {
  return (
    <ModalStyles.StyledBackdrop className={`backdrop ${isTransparent && 'transparent-backdrop'}`} onClick={onClick}></ModalStyles.StyledBackdrop>
  );
};
