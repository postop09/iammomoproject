import axios from 'axios';
import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import theme from '../../theme'
import AnnounceLogin from './AnnounceLogin';

export default function ModalCard({setIsClicked, isLoggedIn, Question}) {
  const [announceLogin, setAnnounceLogin] = useState(true);
  const ModalClose = () => {
    let result = window.confirm('정말 취소할까요?');
    if (result) {
      setIsClicked((prev) => !prev)
    }
  }
  const ModalCloseSec = (e) => {
    if (e.target.id === 'modal_card') {
      let result = window.confirm('정말 취소할까요?');
      if (result) {
        setIsClicked((prev) => !prev)
      }
    } else if (e.target.tagName === 'TEXTAREA') {
      setAnnounceLogin((prev) => !prev)
    } 
  }

  return (
    <SecModalCard onClick={ModalCloseSec} id='modal_card'>
      <WrapModalCard>
        <BackBox>
          <ImgBack src={require('../../assets/img/img_back.jpg')} alt=''/>
        </BackBox>
        <FrontBox>
          <TxtQuestion>{Question}</TxtQuestion>
          {isLoggedIn ? <TxtArea /> : <TxtArea disabled />}
          <WrapBtn>
            <BtnCancel type='button' onClick={ModalClose}>취소</BtnCancel>
            <BtnSubmit type='submit'>글 입력 완료</BtnSubmit>
          </WrapBtn>
        </FrontBox>
      </WrapModalCard>
      {announceLogin ? '' : <AnnounceLogin setAnnounceLogin={setAnnounceLogin} />}
    </SecModalCard>
  )
}

const RotateFrontCard = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
`
const RotateBackCard = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`
const SecModalCard = styled.article`
  position: fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;
  background-color: #00000030;
`
const WrapModalCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85vw;
  height: 60vh;
  perspective: 500px;
  `

const BackBox = styled.div`
  position: absolute;
  border-radius: 7px;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  animation: ${RotateFrontCard} 2s ease-in-out forwards;
  `
  const ImgBack = styled.img`
    border-radius: 7px;
    width: 100%;
    height: 100%;
  `

const FrontBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px 1px #00000070;
  border: 3px solid ${theme.color.camel};
  border-radius: 15px;
  width: 100%;
  height: 100%;
  padding: 40px 30px 20px;
  /* background-color: ${theme.color.mellow}; */
  background-color: #ffffff;
  backface-visibility: hidden;
  animation: ${RotateBackCard} 2s ease-in-out forwards;
`
const TxtQuestion = styled.strong`
  line-height: 1.4rem;
  font-size: 1.2rem;
`
const TxtArea = styled.textarea`
  border: 2px solid ${theme.color.mellow};
  border-radius: 7px;
  width: 100%;
  height: 75%;
  margin-top: 20px;
  font-family: ${theme.font.basic_font};
  /* background-color: ${theme.color.pantone}; */
  resize: none;
`
const WrapBtn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const BtnSubmit = styled.button`
  box-shadow: 2px 1px 3px #00000070;
  border: 2px solid ${theme.color.mellow};
  border-radius: 20px;
  padding: 3px 7px;
  font-family: ${theme.font.basic_font};
  /* background-color: ${theme.color.pantone}; */
`
const BtnCancel = styled.button`
  box-shadow: 2px 1px 3px #00000070;
  border: 2px solid ${theme.color.mellow};
  border-radius: 20px;
  padding: 3px 7px;
  font-family: ${theme.font.basic_font};
`