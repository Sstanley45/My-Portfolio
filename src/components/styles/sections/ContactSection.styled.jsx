import styled, { keyframes } from "styled-components";

const float = keyframes`
    from {
        transform: translate(0px, 0px);
    } 
    65%{
        transform: translate(0px, 10px);
    }
    to {
        transform: translate(0px, 0px);
    }
`;

export const StyledContactSection = styled.section`
  min-height: 90vh;
  padding: 10rem 0 5rem 0;
  width: 100%;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column-reverse;
  }
`;

export const ContactInfo = styled.div`
  flex: 1;
  font-family: "Poppins", sans-serif;
  font-size: 18px;

  p {
    padding: 0;
    margin-bottom: 2rem;
    text-align: justify;
  }
  div {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      margin: 0 2rem 2rem 0;

      svg {
        margin-right: 0.5rem;
      }
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      align-items: flex-start;
      flex-direction: column;

      a {
        margin: 0 0 2rem 0;
        font-size: 16px;
      }
    }
  }
`;

export const ContactImgWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  img {
    width: 70%;
    animation: ${float} 3s ease-in-out infinite;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: flex-start;
    margin-bottom: 2rem;
  }
`;


export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 90%;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease-in-out;
  resize: none;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;
