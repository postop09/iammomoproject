import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../../theme";
import MenuBar from "../Modal/MenuBar";

export default function Nav() {
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal(!modal);
  };
  const navigate = useNavigate();

  return (
    <Header>
      <WrapHeader>
        <BtnMenu onClick={modalHandler}>
          <ImgMenu
            src={require("../../assets/img/icon_ham.png")}
            alt="메뉴열기"
          />
        </BtnMenu>
        <BtnHome onClick={() => {navigate('/');setModal(false);}}>
          MOMO
        </BtnHome>
      </WrapHeader>
      <ModalWrapper>
        {modal && <MenuBar setModal={setModal} modal={modal} />}
      </ModalWrapper>
    </Header>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: #fff;
  z-index: 100;
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
const BtnHome = styled.button`
  padding-bottom: 2px;
  font-family: ${theme.font.gothic_font};
  font-size: 1.1rem;
  cursor: pointer;
`
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
