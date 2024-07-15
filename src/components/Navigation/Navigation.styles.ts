import { styled } from '@linaria/react';
import { Link } from '@tanstack/react-router';

export const StyledHeader = styled.header`
  padding: 1.5rem;
  background-color: #fafafa;
  border-bottom: 1px solid #f3f3f3;
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  font-size: 1.1rem;
  text-transform: uppercase;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: bold;

  &.active {
    text-decoration: underline;
    cursor: not-allowed;
  }
`;
