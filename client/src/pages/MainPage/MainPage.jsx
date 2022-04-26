import React, { useEffect, useState } from 'react'
import theme from '../../theme'
import CardList from '../../components/MainPage/CardList'
import styled, { keyframes } from 'styled-components'
import SideTxt from '../../components/MainPage/SideTxt'
import ModalCard from '../../components/Modal/ModalCard'
import ImgBack from '../../assets/img/img_paper1.jpg';

export default function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [Question, setQuestion] = useState('');
  const [topic, setTopic] = useState([]);

  const url = 'http://52.79.45.37:8080/api';
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('data')) || JSON.parse(localStorage.getItem('apiData'))) {
      setIsLoggedIn(true);
    }
  }, []);
  

  return (
    <WrapMain>
      <TxtHeading>모모 프로젝트에 오신것을 환영합니다.</TxtHeading>
      {isLoggedIn ?
        <TxtMain><TxtBlock>하루 5분</TxtBlock> 나에게 솔직해지는 시간</TxtMain> :
        <TxtMain><TxtBlock>하루 5분</TxtBlock> 가장 솔직해지는 시간</TxtMain>
      }
      <CardList setIsClicked={setIsClicked} setQuestion={setQuestion} topic={topic} setTopic={setTopic} url={url} />
      {isLoggedIn ?
        '' :
        <>
          <WrapTxtInfo>
            위 카드를 선택해주세요. <IconTri>▲</IconTri>
          </WrapTxtInfo>
          <SideTxt />
        </>
      }
      {isClicked ? <ModalCard setIsClicked={setIsClicked} isLoggedIn={isLoggedIn} Question={Question} url={url} /> : ''}
    </WrapMain>
  )
}

const MoveUpDown = keyframes`
  0% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0px);
  }
`

const WrapMain = styled.main`
  min-height: 100vh;
  padding-top: 10vh;
  font-family: ${theme.font.gothic_font};
  text-align: center;
  /* background-color: ${theme.color.pantone}; */
  background-image: url(${ImgBack});
  background-position: center center;
  background-size: cover;
  
`
const TxtMain = styled.strong`
  font-family: ${theme.font.basic_font};
  font-size: 1.1rem;
  text-align: center;
`
const TxtBlock = styled.span`
  display: block;
  line-height: 25px;
`
const WrapTxtInfo = styled.p`
  margin: 10px 0px;
  font-size: .9rem;
`
const IconTri = styled.span`
  display: inline-block;
  font-size: .6rem;
  animation: ${MoveUpDown} 1s infinite ease-out alternate;
`
const TxtHeading = styled.h2`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`