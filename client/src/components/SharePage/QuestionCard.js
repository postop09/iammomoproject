import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

export default function QuestionCard({contents, createDate, postId, setIsClicked, setCardId}) {
  // const [year, month, date] = createDate.split('-');
  const openModal = (e) => {
    setIsClicked((prev) => !prev);
    setCardId(e.currentTarget.id);
  }


  return (
    <SecShareCard onClick={openModal} id={postId}>
      <BtnCard>
        <WrapColorBox></WrapColorBox>
        <WrapTxt>
          <TxtTitle>{contents}</TxtTitle>
          {/* <TxtDate>{createDate}</TxtDate> */}
        </WrapTxt>
      </BtnCard>
    </SecShareCard>
  )
}

const SecShareCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 7px 1px #00000050;
  width:30vw;
  padding: 1vw;
  font-size: .7rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #ffffff;
  list-style: none;
`
const BtnCard = styled.button`
  width: 100%;
  padding: 0;
`
const WrapColorBox = styled.div`
  width: 100%;
  height: 12vh;
  background-color: ${theme.color.mellow};
`
const WrapTxt = styled.div`
  width: 100%;
  padding: 10px 3px;
  text-align: left;
`
const TxtTitle = styled.p`
  width: 85%;
  line-height: 1rem;
  font-family: ${theme.font.gothic_font};
  font-size: .9rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
// const TxtDate = styled.p`
//   color: #6e6e6e;
// `