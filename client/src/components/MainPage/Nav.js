import React from 'react';
import styled from 'styled-components';

export default function Nav() {
  return (
    <header>
      <WrapHeader>
        <BtnMenu>
          <ImgMenu src={require('../../assets/img/icon_ham.png')} alt='메뉴열기' />
        </BtnMenu>
      </WrapHeader>
    </header>
  )
}

const WrapHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  height: 5vh;
`
const BtnMenu = styled.button`
  height: 90%;
  cursor: pointer;
`
const ImgMenu = styled.img`
  height: 70%;
`