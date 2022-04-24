import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../theme'

export default function MyCards({topic, content, create_At, id}) {
  const navigate = useNavigate();
  const createDate = new Date(create_At).toLocaleDateString();
  const [year, month, dateDot] = createDate.split('. ');
  const date = dateDot.slice(0, -1);

  return (
    <ItemCard onClick={() => {navigate(`/mymomo/${id}`)}} id={id}>
      <WrapCard>
        <Txtarea value={content} readOnly></Txtarea>
        <WrapTxt>
          <TxtTopic>{topic}</TxtTopic>
          <TxtDate>{`${year}-${month}-${date}`}</TxtDate>
        </WrapTxt>
      </WrapCard>
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