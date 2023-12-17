import Image from "next/image";
import styled, { css } from "styled-components";

const commonStyles = css`
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 4px;
`;

const itemStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.secondary};

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const Container = styled.div`
  position: relative;
  font-size: 12px;
  min-width: 150px;
  user-select: none;
`;

export const SelectedItem = styled.div`
  ${commonStyles}
  ${itemStyles}

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.hovered};
    box-shadow: ${({ theme }) => theme.shadows.xs};
  }
`;

export const OptionsContainer = styled.div`
  ${commonStyles}

  position: absolute;
  inset: 0;
  top: 2.5rem;
  z-index: 1;
  height: max-content;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  box-shadow: ${({ theme }) => theme.shadows.xs};
`;

export const Option = styled.div`
  ${itemStyles}
`;

export const ArrowIcon = styled(Image)<{
  $isFlipped: boolean;
}>`
  opacity: 0.4;
  ${({ $isFlipped }) => $isFlipped && "rotate: 180deg;"}
  ${({ theme }) => theme.isDark && 'filter: invert(100%);'}
`;

export const OptionsContainerArrow = styled(ArrowIcon)`
  position: absolute;
  left: 0;
  right: 0;
  top: -8px;
  margin: auto;
`;
