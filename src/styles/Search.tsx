import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  margin: 32px auto;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #d3d3d3;
  padding: 5px 5px 5px 25px;
  width: 100%;
  color: #707070;
  font-size: 14px;
  flex-grow: 1;

  &:hover,
  &:focus-visible {
    border-color: #6c72ff;
    box-shadow: 0 2px 5px rgba(0,0,0,.1);
    outline: 0;
  }
`;

export const SearchIcon = styled(Image)`
  opacity: 0.5;
  position: absolute;
  top: 7px;
  left: 7px;
`;

export const ClearIcon = styled(SearchIcon)`
  left: auto;
  top: 8px;
  right: 7px;
  cursor: pointer;
`;
