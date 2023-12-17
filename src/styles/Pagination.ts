import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 32px auto;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  width: 130px;
  border-radius: 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: default;

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.hovered};
    box-shadow: ${({ theme }) => theme.shadows.xs};
  }
`;

export const Item = styled.div<{
  $isNextPageBtn?: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 5px 8px;
  cursor: pointer;
  font-size: 12px;

  ${({ $isNextPageBtn, theme }) =>
    $isNextPageBtn
      ? `border-left: 1px solid ${theme.colors.border.default};`
      : `border-right: 1px solid ${theme.colors.border.default};`}

  ${({ theme }) => theme.isDark && 'filter: invert(100%);'}
`;

export const ArrowIcon = styled(Image)<{
  $isFlipped?: boolean;
}>`
  rotate: ${({ $isFlipped }) => ($isFlipped ? "90deg" : "-90deg")};
  opacity: 0.5;
`;
