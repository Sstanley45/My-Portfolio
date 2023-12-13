import styled from "styled-components";

export const StyledServicesSection = styled.section`
  min-height: 90vh;
  padding: 10rem 0 5rem 0;
  width: 100%;
`;

export const ServicesItems = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
export const SingleService = styled.div`
  min-height: 20rem;
  border-radius: 7px;
  background: rgba(4, 20, 44, 1);
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex: 1;
  padding: 1.2rem;
  margin-right: 2rem;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: translateY(-1rem);
  }
  &:last-child() {
    margin-right: 0;
  }

  h1 {
    font-size: 2rem;
    margin: 1.5rem 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.orange}0%,
      ${({ theme }) => theme.colors.purple}100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 0 4rem 0;
    width: 100%;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  font-size: 28px;
  align-items: center;
  justify-content: center;
  height: 4.5rem;
  width: 4.5rem;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.navyBlue};
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
`;
