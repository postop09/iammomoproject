import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

export default function ShareCard({dataQuestion, setIsClicked, setCardId, id}) {
  const openModal = (e) => {
    setIsClicked((prev) => !prev);
    setCardId(e.currentTarget.id);
  }
  
  return (
    <SecShareCard onClick={openModal} id={id}>
      <BtnCard>
        <Txtarea readOnly></Txtarea>
        <WrapTxt>
          <TxtTitle>{dataQuestion}</TxtTitle>
        </WrapTxt>
      </BtnCard>
    </SecShareCard>
  )
}

const SecShareCard = styled.li`
  width: 100%;
  margin-bottom: 20px;
  padding: 0 10px;
`
const BtnCard = styled.button`
  box-shadow: 0 1px 3px 1px #00000050;
  border-radius: 10px;
  width: 100%;
  padding: 0;
`
const Txtarea = styled.textarea`
  border: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  height: 23vh;
  padding: 5px 10px;
  font-family: ${theme.font.basic_font};
  font-size: .9rem;
  background-color: ${theme.color.camel};
  resize: none;
  overflow: hidden;
`
const WrapTxt = styled.div`
  width: 100%;
  padding: 10px 10px 15px;
  text-align: left;
`
const TxtTitle = styled.p`
  line-height: 1rem;
  font-family: ${theme.font.gothic_font};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.2rem;
`