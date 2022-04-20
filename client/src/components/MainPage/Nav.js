import React, { useState } from "react";
import styled from "styled-components";
import MenuBar from "../Modal/MenuBar";

export default function Nav() {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };
  return (
    <header>
      <WrapHeader>
        <BtnMenu onClick={modalHandler}>
          <ImgMenu
            src={require("../../assets/img/icon_ham.png")}
            alt="메뉴열기"
          />
        </BtnMenu>
      </WrapHeader>
      <ModalWrapper>
        {modal && <MenuBar setModal={setModal} modal={modal} />}
      </ModalWrapper>
    </header>
  );
}

const WrapHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  height: 5vh;
`;
const BtnMenu = styled.button`
  height: 90%;
  cursor: pointer;
`;
const ImgMenu = styled.img`
  height: 70%;
`;

const ModalWrapper = styled.div`
  animation: modal-bg-show 3s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
