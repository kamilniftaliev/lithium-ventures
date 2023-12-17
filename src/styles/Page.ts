import styled from "styled-components";

export const Container = styled.main`
  position: relative;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
`

export const Body = styled.div`
  padding-left: 20px;
  margin-top: 68px;
`

export const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
`

export const SectionColor = styled.span`
  width: 1rem;
  height: 2rem;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.brand.primary};
`

export const SectionTitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 1rem;
`

export const ErrorMessage = styled.p`
  background-color: ${({ theme }) => theme.colors.bg.error};
  color: ${({ theme }) => theme.colors.text.error};
  text-align: center;
  border-radius: 4px;
  padding: 8px 50px;
  width: fit-content;
  font-size: 14px;
  left: 0;
  right: 0;
  margin: 30px auto;
`