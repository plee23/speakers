import styled from "styled-components";

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(/images/art-radius.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left top;
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 83px);
  background-image: url(/images/hero-img-1.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right top;
  max-width: 1440px;

  @media (max-width: 1024px) {
    min-height: calc(100vh - 64px);
  }
`;

export const CustomizeWrapper = styled.div`
  margin-top: 160px;
  width: 100%;
  background-image: linear-gradient(to bottom, transparent, #221e29);
  border-radius: 0 0 250px 0;
  padding-bottom: 100px;
`;
