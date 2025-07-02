import React from "react";
import {
  PopupContainer,
  PopupInner,
  CloseButton,
  Tick,
  PopupText,
} from "./Popup.styles";

const Popup = ({ onClose }) => {
  return (
    <PopupContainer>
      <PopupInner>
        <CloseButton onClick={onClose}>X</CloseButton>
        <Tick>&#10003;</Tick>
        <PopupText>
          Hello Visitor, You Have <br /> Successfully Signed Up!
        </PopupText>
      </PopupInner>
    </PopupContainer>
  );
};

export default Popup;
