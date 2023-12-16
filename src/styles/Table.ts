import styled from "styled-components";
import Image from "next/image";
import { STATUS_COLORS } from "@/constants";
import { StatusValues } from "@/types";
import { ErrorMessage } from "./Page";

export const Container = styled.table`
  margin-top: 2rem;
  font-size: 12px;
  color: #6F767E;
  border-spacing: 0;
  width: 100%;
  
  tr:nth-child(even) {
    background-color: #F4F4F480;
  }

  th, td {
    padding: 10px 15px;
  }

  th {
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    text-align: left;
  }

  td {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  }
`

export const Status = styled.span<{ $status: StatusValues }>`
  background-color: ${({ $status }) => STATUS_COLORS[$status]};
  padding: 2px 8px;
  border-radius: 5px;
  color: #1A1D1F;
`

export const UsernameCell = styled.td`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const TimeCell = styled.td`
  width: 30%;
`

export const StatusCell = styled.td`
  width: 15%;
`

export const ValueCell = styled.td`
  color: #1A1D1F;
  width: 15%;
`

export const Avatar = styled(Image)`
  border-radius: 50%;
`

export const NoResults = styled(ErrorMessage)`
  background-color: #ffefc3;
  color: #865100;
`