import React from 'react'
import styled from 'styled-components'

export default function SideTxt() {
  return (
      <SecTxt>
        <TxtTitle>I am MOMO Project</TxtTitle>
        <p>
          <TxtSubtitle>단 5분, 가장 솔직해지는 시간</TxtSubtitle>
          <TxtBlock>남들의 시선을 신경쓰느라</TxtBlock>
          <TxtBlock>가면을 쓰는 기분을 느끼시나요?</TxtBlock>
          <TxtBlock>솔직한 일상을 나눌 곳이 필요한가요?</TxtBlock>
  
          <TxtSubtitle>I’m MOMO 프로젝트는 본격 ‘일상 공감’ 프로젝트입니다.</TxtSubtitle>
          <TxtBlock>아이엠 MOMO 프로젝트에서는</TxtBlock>
          <TxtBlock>단 하나의 이름, ‘모모’로 </TxtBlock>
          <TxtBlock>매일 단 5분, 다양한 일상을 나눕니다.</TxtBlock>
  
          <TxtSubtitle>누구나 ‘모모’가 될 수 있습니다</TxtSubtitle>
          <TxtBlock>세상이 보는 나를 신경쓰지 않고</TxtBlock>
          <TxtBlock>내가 보는 세상을 솔직하게 나누는 곳.</TxtBlock>
          <TxtBlock>나이, 성별, 인종, 직업, 학교에 상관없이 </TxtBlock>
          <TxtBlock>나만의 이야기로 서로를 발견하는 곳입니다.  </TxtBlock>
          <TxtBlock>전 세계 누구나 모모가 될 수 있습니다.</TxtBlock>
          <TxtBlock>현실에서 만날 수 없는 사람들이 </TxtBlock>
          <TxtBlock>서로의 일상을 나누고</TxtBlock>
          <TxtBlock>공감하고 소통할 수 있는 곳입니다. </TxtBlock>
  
          <TxtSubtitle>세상의 모든 모모를 위해</TxtSubtitle>
        </p>
      </SecTxt>
  )
}

const SecTxt = styled.section`
  margin-top: 80px;
`
const TxtTitle = styled.h3`
  margin-bottom: 40px;
  font-size: 1.3rem;
  font-weight: 700;
`
const TxtSubtitle = styled.strong`
  display: block;
  margin: 20px 0 15px;
  line-height: 25px;
  font-weight: 700;
`
const TxtBlock = styled.span`
  display: block;
  font-size: 1rem;
  line-height: 25px;
`