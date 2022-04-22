import React, { useState } from 'react'
import styled from 'styled-components'
import theme from '../../theme'

export default function MyCards({topic, contents, date}) {
  const [selecteCard, setSelecteCard] = useState(false);

  const changeMod = (e) => {
    console.log(e.currentTarget);
    setSelecteCard((prev) => !prev);
  }
  return (
    <ItemCard onClick={changeMod}>
        {selecteCard ?
          <WrapCard>
            <TxtareaOpen value={contents} readOnly></TxtareaOpen>
            <WrapTxt>
              <TxtTopic>{topic}</TxtTopic>
              <TxtDate>{date}</TxtDate>
            </WrapTxt>
            <button>수정</button>
            <button>삭제</button>
          </WrapCard>
          :
          <WrapCard>
            <Txtarea value={contents} readOnly></Txtarea>
            <WrapTxt>
              <TxtTopic>{topic}</TxtTopic>
              <TxtDate>{date}</TxtDate>
            </WrapTxt>
          </WrapCard>
        }
    </ItemCard>
  )
}

const ItemCard = styled.li`
  width: 100%;
  margin: 20px 0 0;
  padding: 0 10px;
  `
const WrapCard = styled.div`
  box-shadow: 0 1px 3px 1px #00000050;
  border-radius: 10px;
  width: 100%;
`
const Txtarea = styled.textarea`
  border: none;
  width: 100%;
  height: 23vh;
  padding: 5px 10px;
  font-family: ${theme.font.basic_font};
  font-size: .9rem;
  background-color: #c5a97766;
  resize: none;
  overflow: hidden;
`
const TxtareaOpen = styled.textarea`
  border: none;
  width: 100%;
  min-height: 23vh;
  height: fit-content;
  padding: 5px 10px;
  font-family: ${theme.font.basic_font};
  font-size: .9rem;
  background-color: #c5a97766;
  resize: none;
`
const WrapTxt = styled.p`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  height: 8vh;
  padding: 10px 10px;
  font-family: ${theme.font.gothic_font};
  text-align: left;
`
const TxtTopic = styled.strong`
  display: block;
  font-weight: 700;
`
const TxtDate = styled.small`
  font-size: .9rem;
`