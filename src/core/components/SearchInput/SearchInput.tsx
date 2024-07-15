import type { FC, InputHTMLAttributes } from 'react';
import { StyledContainer, StyledInput, StyledSpan } from './SearchInput.styles';

type SearchInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const SearchInput: FC<SearchInputProps> = (props) => {
  return (
    <StyledContainer>
      <StyledInput type="search" {...props} />
      <StyledSpan>🔍</StyledSpan>
    </StyledContainer>
  );
};
