import styled from "styled-components";
import Image from "next/image";
import { StatusValues } from "@/types";
import { ErrorMessage } from "./Page";

export const Container = styled.table`
  margin-top: 2rem;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
  border-spacing: 0;
  width: 100%;
  
  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.bg.tableRow};
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
  background-color: ${({ $status, theme }) => theme.colors.status[$status]};
  padding: 2px 8px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text.primary};
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
  color: ${({ theme }) => theme.colors.text.primary};
  width: 15%;
`

export const Avatar = styled(Image)`
  border-radius: 50%;
`

export const NoResults = styled(ErrorMessage)`
  background-color: ${({ theme }) => theme.colors.bg.warning};
  color: ${({ theme }) => theme.colors.text.warning};
`