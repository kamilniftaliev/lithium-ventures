import styled from "styled-components";

export const Container = styled.main`
  padding: 0 3rem;
`

export const Title = styled.h3`
  color: #272B30;
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
  color: #1A1D1F;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
`

export const SectionColor = styled.span`
  width: 1rem;
  height: 2rem;
  border-radius: 3px;
  background-color: #999dff;
`

export const SectionTitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 1rem;
`

export const ErrorMessage = styled.p`
  background-color: #ffc7c7;
  text-align: center;
  color: #9d0202;
  border-radius: 4px;
  padding: 8px 50px;
  width: fit-content;
  font-size: 14px;
  left: 0;
  right: 0;
  margin: 30px auto;
`