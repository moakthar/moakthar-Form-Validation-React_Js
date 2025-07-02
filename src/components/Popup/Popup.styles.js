import styled from "styled-components";

export const PopupContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupInner = styled.div`
  position: relative;
  width: 40%;
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  border: 1px solid red;
  cursor: pointer;
  color: white;
  background-color: rgba(248, 21, 40, 0.4);
  transition: 0.5s;
  border-radius: 50%;

  &:hover {
    background-color: rgba(248, 21, 40);
    opacity: 1;
  }
`;

export const Tick = styled.span`
  color: green;
  font-size: 50px;
  border-radius: 50%;
  border: 5px double darkgreen;
  padding: 10px;
  display: inline-block;
  margin: 20px 0;
`;

export const PopupText = styled.h2`
  text-align: center;
  text-decoration: underline;
  color: mediumblue;
  font-size: 1.5rem;
`;
