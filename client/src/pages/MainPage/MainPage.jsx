import React, { useState } from 'react'
import theme from '../../theme'
import CardList from '../../components/MainPage/CardList'
import styled, { keyframes } from 'styled-components'
import SideTxt from '../../components/MainPage/SideTxt'
import ModalCard from '../../components/Modal/ModalCard'

export default function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [Question, setQuestion] = useState('');
  const listQuestion = [
    '당신은 어떤 모모입니까?',
    '오늘 3시에 느꼈던 감정은 무엇인가요?',
    '오늘 하루 중 가장 기억에 남는 순간은 언제인가요?',
    '지금 당장 생각나는 색깔은 무엇인가요? 1초안에 대답하기!',
    '과거로 추억 여행을 갈 수 있다면, 어디쯤으로 가고 싶나요?',
    '12살의 여름, 당신은 어땠나요?',
    '내일 날씨가 정말 좋다면, 햇볕을 만끽하러 어디로 가실래요?',
    '올해 연봉이 20%가 오른다면, 무엇을 제일 먼저 할까요?'
  ];

  return (
    <WrapMain>
      {isLoggedIn ?
        <TxtMain><TxtBlock>하루 5분</TxtBlock> 나에게 솔직해지는 시간</TxtMain> :
        <TxtMain><TxtBlock>하루 5분</TxtBlock> 가장 솔직해지는 시간</TxtMain>
      }
      <CardList setIsClicked={setIsClicked} setQuestion={setQuestion} listQuestion={listQuestion} />
      {isLoggedIn ?
        '' :
        <WrapTxtInfo>
          위 카드를 선택해주세요. <IconTri>▲</IconTri>
        </WrapTxtInfo>
      }
      <section>
        <SideTxt />
        <SideTxt />
        <SideTxt />
      </section>
      {isClicked ? <ModalCard setIsClicked={setIsClicked} isLoggedIn={isLoggedIn} Question={Question} /> : ''}
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
  padding-top: 5vh;
  font-family: ${theme.font.basic_font};
  text-align: center;
`
const TxtMain = styled.strong`
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
const IconTri = styled.div`
  display: inline-block;
  font-size: .6rem;
  animation: ${MoveUpDown} 1s infinite ease-out alternate;
`