import styled, { keyframes } from "styled-components";

const typing = keyframes`
  0%{
    width: 0ch;

  }
  100% {
   width: 33ch;
  }
`;

const blink = keyframes`
    0%{
      border-right: 4px solid rgba(255, 255, 255, 0);
    }
     100%{
      border-right: 4px solid rgba(255, 255, 255, 1); 
    }
  `;

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60%{
      transform: translateY(-15px);
    }
  `;

const rotate = keyframes` 
    0%{
      transform: rotate(0deg); 
    }
     100%{
      transform : rotate(360deg);
    }
  `;

export const StyledHeroSection = styled.section`
  width: 100%;
  height: 90vh;
  background: linear-gradient(
      135deg,
      rgba(0, 64, 77, 0.9) 0%,
      rgba(1, 8, 19, 0.6) 100%
    ),
    url("./images/landingImg1.jpg") center no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 60px;
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 58rem;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;

  h1 {
    letter-spacing: 1.2rem;
    font-size: 2rem;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    width: 33ch;
    margin: auto;
    animation: ${typing} 5s steps(33), ${blink} 1s ease-in-out 7s infinite;
    border-right: 4px solid rgba(255, 255, 255, 1);
  }

  h3 {
    font-size: 4rem;
    margin: 1.5rem 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.orange}0%,
      ${({ theme }) => theme.colors.purple} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.7rem;
    font-weight: 400;
    text-transform: none;
  }

  div {
    margin: 2.5rem 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h1 {
      letter-spacing: 1rem;
      font-size: 1.5rem;
      width: 33ch;
    }
    h3 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
`;

export const StyledArrowDown = styled.a`
  position: absolute;
  bottom: 50px;

  svg {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.white};
    animation: ${bounce} 2s infinite 5s;

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

export const HeroSocialIcons = styled.div`
  position: fixed;
  right: 20px;

  @media(max-width : ${({ theme }) => theme.mobile}) {
    bottom: 50px; 
  }
`;

export const SocialIcon = styled.a`
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(249, 105, 14, 0.1);
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 10px;

  svg {
    color: rgba(249, 105, 14);
    transition: ${({ theme }) => theme.transition};
  }

  &:hover {
    svg {
      animation: ${rotate} 1.5s linear infinite;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
