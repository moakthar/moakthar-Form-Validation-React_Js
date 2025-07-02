import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 450px;
  border-radius: 20px;
  margin: auto;
  background-color: #149eca;
  box-sizing: border-box;
  padding: 40px;
  color: white;
  margin-top: 100px;

  h2 {
    text-align: center;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 10px;
  background-color: #23272f;
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  color: rgb(248, 243, 243);
  border-radius: 5px 10px;
  margin: 5px;
  font-weight: bold;
`;

export const SubmitButton = styled.button`
  position: relative;
  left: 95px;
  width: 50%;
  box-sizing: border-box;
  padding: 10px 0;
  margin-top: 30px;
  outline: none;
  border: none;
  background-color: #23272f;
  border-radius: 20px;
  font-size: 20px;
  color: white;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    opacity: 0.3;
  }
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 14px;
  display: block;
  margin-bottom: 10px;
`;
