import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../theme'

export default function BecomeTxt() {
  const navigate = useNavigate();
  return (
    <SecTxt>
      <Background>
        <TxtBack>M</TxtBack>
        <TxtBack>O</TxtBack>
        <TxtBack>M</TxtBack>
        <TxtBack>O</TxtBack>
      </Background>
      <TxtTitle>매일 같은 일상에 <span>‘모모’</span> 한 스푼</TxtTitle>
      <TxtBox>
        <TxtBlock>하루 5분의 시간으로</TxtBlock>
        <TxtBlock>가벼운 일상 이야기부터</TxtBlock>
        <TxtBlock>진지하고 진솔한 감정까지</TxtBlock>
        <TxtBlock>다양한 이야기로 서로의 삶을 공유합니다.</TxtBlock>
      </TxtBox>
      <TxtBox>
        <TxtBlock>모모가 되는 방법은요? 간단해요!</TxtBlock>
        <TxtBlock>‘모모'라는 이름으로 </TxtBlock>
        <TxtBlock>솔직한 일상을 나누면 됩니다.</TxtBlock>
        <TxtBlock>누구나 모모가 될 수 있어요.</TxtBlock>
      </TxtBox>
      <div>
        <TxtBox>
          <TxtBlock>무슨 이야기를 써야할지 고민이라면?</TxtBlock>
          <TxtBlock>다양한 질문들을 선택해보고</TxtBlock>
          <TxtBlock>마음에 드는 질문을 선택해서 써보세요!</TxtBlock>
        </TxtBox>
        <BtnLink type='button' onClick={() => {navigate('/')}}>
          질문 선택하기
        </BtnLink>
      </div>
      <div>
        <TxtBox>
          <TxtBlock>모모로 글을 다 썼다면?</TxtBlock>
          <TxtBlock>다른 모모의 글을 구경해보세요.</TxtBlock>
        </TxtBox>
        <BtnLink type='button' onClick={() => {navigate('/momoshare')}}>
          다른 모모의 글 보기
        </BtnLink>
      </div>
      <div>
        <TxtBox>
          <TxtBlock>다양한 질문으로 글을 쓰고 </TxtBlock>
          <TxtBlock>나의 모모 글을 모아서 보세요.</TxtBlock>
        </TxtBox>
        <BtnLink type='button' onClick={() => {navigate('/mymomo')}}>
          My MOMO 보기
        </BtnLink>
      </div>
      <div>
        <TxtBox>
          <TxtBlock>세상의 모든 모모들을 위해</TxtBlock>
          <TxtBlock>에티켓을 지켜주세요.</TxtBlock>
        </TxtBox>
        <BtnLink type='button' onClick={() => {navigate('/')}}>
          MOMO 규칙 확인하기
        </BtnLink>
      </div>
      <TxtBox>
        <TxtOrange>세상의 모든 모모를 위해!</TxtOrange>
        <TxtOrange>하루 5분, 모모하세요!</TxtOrange>
      </TxtBox>
    </SecTxt>
  )
}

const SecTxt = styled.section`
  position: relative;
  padding: 10vh 20px 3vh;
  font-family: ${theme.font.gothic_font};
  overflow: hidden;
`
const TxtTitle = styled.h3`
  display: inline-block;
  border-bottom: 2px solid ${theme.color.camel};
  margin-bottom: 20px;
  padding-bottom: 5px;
  font-size: 1.4rem;
  font-weight: 900;
  color: #37352f;
  > span {
    color: #d9730d;
  }
`
const TxtBox = styled.p`
  margin: 7vh 0 0;
`
const TxtBlock = styled.span`
  display: block;
  font-size: 1.1rem;
  line-height: 25px;
`
const TxtOrange = styled.span`
  display: block;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 25px;
  color: #d9730d;
`
const BtnLink = styled.button`
  box-shadow: 0 2px 5px 1px #00000050;
  border-radius: 3px;
  margin-top: 1vh;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: ${theme.font.gothic_font};
  background-color: ${theme.color.camel};
  cursor: pointer;
`
const Background = styled.p`
  position: absolute;
  top: 30vh;
  right: -97px;
  line-height: 16rem;
  font-size: 20rem;
  font-weight: 700;
  opacity: .1;
  user-select: none;
  cursor: default;
`
const TxtBack = styled.span`
  display: block;
`