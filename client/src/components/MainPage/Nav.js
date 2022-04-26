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
        <BtnHome onClick={() => {navigate('/'); setModal(false);}}>
          MOMO
        </BtnHome>
      </WrapHeader>
        {modal && <MenuBar setModal={setModal} modal={modal} />}
    </Header>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: #fff;
  z-index: 100;
`;
const WrapHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  height: 42px;
  padding: 1px 5px;
`;
const BtnMenu = styled.button`
  height: 90%;
  padding: 0;
  cursor: pointer;
`;
const ImgMenu = styled.img`
  height: 80%;
`;
const BtnHome = styled.button`
  margin-left: 5px;
  padding: 0px 0 5px;
  font-family: ${theme.font.basic_font};
  font-size: 1.3rem;
  font-weight: 700;
  cursor: pointer;
`
