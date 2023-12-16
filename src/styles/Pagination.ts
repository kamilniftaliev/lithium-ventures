import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 32px auto;
  border: 1px solid #d3d3d3;
  width: 130px;
  border-radius: 4px;
  font-size: 12px;
  color: #707070;
  cursor: default;

  &:hover {
    border-color: #6c72ff;
    box-shadow: 0 2px 5px rgba(0,0,0,.1);
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

  ${({ $isNextPageBtn }) =>
    $isNextPageBtn
      ? "border-left: 1px solid #d3d3d3;"
      : "border-right: 1px solid #d3d3d3;"}
`;

export const ArrowIcon = styled(Image)<{
  $isFlipped?: boolean;
}>`
  rotate: ${({ $isFlipped }) => ($isFlipped ? "90deg" : "-90deg")};
  opacity: 0.5;
`;
