import React from 'react'
import styled from 'styled-components'

export default function SideTxt() {
  return (
      <WrapTxt>
        <TxtBlockBold>I am MOMO Project</TxtBlockBold>
        <strong>
          <TxtBlock>설명</TxtBlock>
          <TxtBlock>설명</TxtBlock>
          <TxtBlock>설명</TxtBlock>
        </strong>
      </WrapTxt>
  )
}

const WrapTxt = styled.p`
  margin-top: 30px;
`
const TxtBlockBold = styled.span`
  display: block;
  line-height: 25px;
  font-weight: 700;
`
const TxtBlock = styled.span`
  display: block;
  line-height: 25px;
`