import type { FC } from 'react';
import { getRandomValue } from '../../utils/get-random-value';
import { COLORS } from './constants';
import { StyledSpan } from './Tag.styles';

interface TagProps {
  text: string;
}

export const Tag: FC<TagProps> = ({ text }) => {
  const char = text.charAt(0).toUpperCase();

  const { background: backgroundColor, char: charColor } =
    getRandomValue(COLORS);

  return (
    <StyledSpan background={backgroundColor} char={charColor}>
      {char}
    </StyledSpan>
  );
};
