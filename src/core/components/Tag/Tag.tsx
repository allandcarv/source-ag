import type { FC } from 'react';

import type { Color } from '../../../interfaces/tag-color';

import { StyledSpan } from './Tag.styles';

interface TagProps {
  text: string;
  tagColor: Color;
}

export const Tag: FC<TagProps> = ({ tagColor, text }) => {
  const char = text.charAt(0).toUpperCase();

  const { backgroundColor, fontColor } = tagColor;

  return (
    <StyledSpan background={backgroundColor} char={fontColor}>
      {char}
    </StyledSpan>
  );
};
