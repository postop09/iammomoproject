import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import theme from '../../theme'
import AnnounceLogin from './AnnounceLogin';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ModalCard({setIsClicked, isLoggedIn, Question, url}) {
  const [announceLogin, setAnnounceLogin] = useState(true);
  const [myContents, setMyContents] = useState('');
  const [saved, setSaved] = useState(false);
  const [unlock, setUnlock] = useState(true);
  const [btnAble, setBtnAble] = useState(true);
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();
  // 미로그인 함수
  const modalCloseSec = (e) => {
    if (e.target.id === 'modal_card' || e.target.name === 'btn_cancel') {
      let result = window.confirm('정말 취소할까요?');
      if (result) {
        setIsClicked((prev) => !prev)
      }
    }
  }
  const modalLoginOpen = () => {
      setAnnounceLogin((prev) => !prev);
  }

  // 로그인 후 함수
  const fetchPOSTpost = async() => {
    const res = await axios.post(`${url}/post`, {
      topic: Question,
      content: myContents,
      userId: userId
    });
  }

  const setValue = (e) => {
    setMyContents(e.target.value);
    if (e.target.value === '') {
      setBtnAble(true);
    } else {
      setBtnAble(false);
    }
  }
  const btnSubmit = (e) => {
    e.preventDefault();
    if (myContents) {
      const answer = window.confirm('저장할까요?');
      if (answer) {
        fetchPOSTpost();
        setSaved((prev) => !prev);
        setUnlock(false);
      }
    }
  }

  return (
    <SecModalCard onClick={modalCloseSec} id='modal_card'>
      <WrapModalCard>
        <BackBox>
          <ImgBack src={require('../../assets/img/img_back.jpg')} alt=''/>
        </BackBox>
        <FrontBox>
          <TxtQuestion>{Question}</TxtQuestion>
          {unlock ? 
            isLoggedIn ?
              <TxtArea onKeyUp={setValue} />
              : <TxtArea readOnly onClick={modalLoginOpen} /> :
            <TxtArea readOnly />
          }
          <WrapBtn>
            <BtnCancel type='button' name='btn_cancel'>닫기</BtnCancel>
          {saved ?
            <BtnSubmit type='button' onClick={() => {navigate('/momoshare')}}>다른 모모글 보러가기</BtnSubmit>
            : <BtnSubmit type='submit' onClick={btnSubmit} disabled={btnAble} id='btn_submit'>글 입력 완료</BtnSubmit>
          }
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
  z-index: 100;
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
  animation: ${RotateFrontCard} 1s ease-in-out forwards;
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
  padding: 20px 20px 20px;
  background-color: #ffffff;
  background-color: ${theme.color.mellow};
  backface-visibility: hidden;
  animation: ${RotateBackCard} 1s ease-in-out forwards;
`
const TxtQuestion = styled.strong`
  line-height: 1.4rem;
  font-family: ${theme.font.basic_font};
  font-size: 1.1rem;
`
const TxtArea = styled.textarea`
  border: 1px solid ${theme.color.camel};
  border-radius: 7px;
  width: 100%;
  height: 75%;
  margin-top: 10px;
  padding: 5px;
  font-family: ${theme.font.basic_font};
  font-size: .9rem;
  background-color: ${theme.color.pantone};
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
  margin-top: 5px;
  padding: 5px 10px;
  font-family: ${theme.font.gothic_font};
  font-size: .9rem;
  background-color: ${theme.color.camel};
`
const BtnCancel = styled.button`
  box-shadow: 2px 1px 3px #00000070;
  border: 2px solid ${theme.color.mellow};
  border-radius: 20px;
  margin-top: 5px;
  padding: 3px 10px;
  font-family: ${theme.font.gothic_font};
  font-size: .9rem;
  background-color: ${theme.color.camel};
`