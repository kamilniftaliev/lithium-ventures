import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  margin: 32px auto;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  padding: 8px 8px 8px 30px;
  width: 100%;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 14px;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.bg.primary};

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.border.hovered};
    box-shadow: ${({ theme }) => theme.shadows.xs};
    outline: 0;
  }
`;

export const SearchIcon = styled(Image)`
  opacity: 0.4;
  position: absolute;
  top: 8px;
  left: 8px;
  ${({ theme }) => theme.isDark && 'filter: invert(100%);'}
`;

export const ClearIcon = styled(SearchIcon)`
  left: auto;
  top: 11px;
  right: 10px;
  cursor: pointer;
  ${({ theme }) => theme.isDark && 'filter: invert(100%);'}
`;
