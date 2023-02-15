import React, { memo } from 'react';
import { ButtonStyles } from '../../Button/Button.styles';
import { BsPlay } from 'react-icons/bs';

interface IProps {
  onclick: () => void;
}

export const PlayButton = ({ onclick }: IProps) => {
  return (
    <ButtonStyles.StyledButtonSuccess className="icon-container" data-testid="play-button" name="play" onClick={onclick}>
      <BsPlay style={{ height: '100%', width: '100%' }} />
    </ButtonStyles.StyledButtonSuccess>
  );
};

export const MemoPlayButton = memo(PlayButton);
