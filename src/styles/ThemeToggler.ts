import Image from "next/image";
import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 5px;
  padding: 4px 6px;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background-color: ${({ theme }) => theme.colors.brand.primary};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.hovered};
    box-shadow: ${({ theme }) => theme.shadows.xs};
  }
`
export const Icon = styled(Image)`
  opacity: 0.5;
`;
