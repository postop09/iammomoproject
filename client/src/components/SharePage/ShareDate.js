import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import ListShareCard from './ListShareCard';

export default function ShareDate() {
  return (
    <WrapShare>
      <TxtMain><TxtBlock>오늘</TxtBlock>누군가 솔직했던 시간</TxtMain>
      <ListShareCard />
    </WrapShare>
  )
}

const WrapShare = styled.section`
  max-height: 60vh;
  padding: 5vh 10px 0;
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