import Image from "next/image";
import styled, { css } from "styled-components";

const commonStyles = css`
  border: 1px solid #bdbdbd;
  border-radius: 4px;
`;

const itemStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 10px;
  cursor: pointer;
  color: #707070;

  &:hover {
    color: #000;
  }
`;

export const Container = styled.div`
  position: relative;
  font-size: 12px;
  min-width: 10rem;
  user-select: none;
`;

export const SelectedItem = styled.div`
  ${commonStyles}
  ${itemStyles}

  &:hover {
    border-color: #6c72ff;
    box-shadow: 0 2px 5px rgba(0,0,0,.1);
  }
`;

export const OptionsContainer = styled.div`
  ${commonStyles}

  position: absolute;
  inset: 0;
  top: 2.5rem;
  height: max-content;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,.1);
`;

export const Option = styled.div`
  ${itemStyles}
`;

export const ArrowIcon = styled(Image)<{
  $isFlipped: boolean;
}>`
  opacity: 0.4;
  ${({ $isFlipped }) => $isFlipped && "rotate: 180deg;"}
`;

export const OptionsContainerArrow = styled(ArrowIcon)`
  position: absolute;
  left: 0;
  right: 0;
  top: -8px;
  margin: auto;
`
