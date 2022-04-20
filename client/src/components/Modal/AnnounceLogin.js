import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../theme'

export default function AnnounceLogin({setAnnounceLogin}) {
  const ModalCloseSec = (e) => {
    if (e.target.id === 'modal_announce') {
        setAnnounceLogin((prev) => !prev)
    } else if (e.target.id === 'btn_close') {
      setAnnounceLogin((prev) => !prev)
    }
  }
  const navigate = useNavigate();
  return (
    <WrapAnnounce id='modal_announce' onClick={ModalCloseSec}>
      <ListBtnAnnounce>
        <li>
          <BtnNew type='button' onClick={() => {navigate('/register')}}>
            회원가입
          </BtnNew>
        </li>
        <li>
          <BtnLogin type='button' onClick={() => {navigate('/authselection')}}>
            로그인
          </BtnLogin>
        </li>
        <li>
          <BtnClose id='btn_close'>
            X<TxtHide>로그인/회원가입 안내창 닫기</TxtHide>
          </BtnClose>
        </li>
      </ListBtnAnnounce>
    </WrapAnnounce>
  )
}

const WrapAnnounce = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000050;
  z-index: 100;
`
const ListBtnAnnounce = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px 1px #00000050;
  border: 1px solid ${theme.color.camel};
  border-radius: 10px;
  width: 50vw;
  height: 15vh;
  padding: 4vh;
  background-color: ${theme.color.pantone};
  list-style: none;
`
const BtnNew = styled.button`
  border-bottom: 1px solid ${theme.color.camel};
  font-family: ${theme.font.basic_font};
  font-size: 1.1rem;
`
const BtnLogin = styled.button`
  font-family: ${theme.font.basic_font};
  font-size: 1.1rem;
`
const BtnClose = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #00000090;
`
const TxtHide = styled.span`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`
