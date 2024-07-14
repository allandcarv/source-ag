import type { FC, InputHTMLAttributes } from 'react';
import { StyledContainer, StyledInput, StyledSpan } from './SearchInput.styles';

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

export const SearchInput: FC<SearchInputProps> = (props) => {
  return (
    <StyledContainer>
      <StyledInput {...props} />
      <StyledSpan>🔍</StyledSpan>
    </StyledContainer>
  );
};
