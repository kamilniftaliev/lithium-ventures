import styled, { keyframes } from "styled-components";

const loading = keyframes`
  to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  }
`

export const Skeleton = styled.div<{
  $circle?: boolean
}>`
  ${({ $circle }) => $circle ? 'aspect-ratio: 1;' : 'width: 100%'};
  border-radius: ${({ $circle }) => $circle ? '50%' : '5px'};
  height: ${({ $circle }) => $circle ? '25px' : '20px'};

  cursor: progress; 
  background: 
    linear-gradient(0.25turn, transparent, #fff, transparent),
    linear-gradient(#eee, #eee),
    radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
    linear-gradient(#eee, #eee);  
  background-repeat: no-repeat;
  background-size: 315px 250px, 315px 180px, 100px 100px, 225px 30px; 
  background-position: -315px 0, 0 0, 0px 190px, 50px 195px; 
  animation: ${loading} 1.5s infinite;
`