import React from 'react';
import styled from 'styled-components';
import testData from '../../database/testData.json';
import theme from '../../theme';

export default function ModalMyPost({setSelectedCard, myPostId}) {
  const modalCloseSec = (e) => {
    if (e.target.tagName === 'ARTICLE' || e.target.name === 'modalClose') {
      setSelectedCard((prev) => !prev); 
    }
  }
  return (
    testData.map((data) => {
      if (data.postId === +myPostId ) {
        return (
          <ItemCard key={data.postId} onClick={modalCloseSec}>
            <WrapCard>
              <Txtarea value={data.contents} readOnly></Txtarea>
              <WrapTxt>
                <TxtTopic>{data.topic}</TxtTopic>
                <TxtDate>{data.createDate}</TxtDate>
              </WrapTxt>
              <ListBtn>
                <li>
                  <Btn type='button'>
                    수정
                  </Btn>
                </li>
                <li>
                  <Btn type='button'>
                    삭제
                  </Btn>
                </li>
                <li>
                  <Btn type='button' name='modalClose'>
                    닫기
                  </Btn>
                </li>
              </ListBtn>
            </WrapCard>
          </ItemCard>
        )
      }
    })
  )
}

const ItemCard = styled.article`
  position: fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;
  background-color: #00000050;
  `
const WrapCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px 2px #00000050;
  border-radius: 10px;
  width: 90vw;
  background-color: ${theme.color.pantone};
`
const Txtarea = styled.textarea`
  border: none;
  width: 100%;
  height: 37vh;
  padding: 5px 10px;
  font-family: ${theme.font.basic_font};
  font-size: 1rem;
  background-color: #c5a97766;
  resize: none;
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
  height: 10vh;
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
const ListBtn = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`
const Btn = styled.button`
  padding: 10px;
  background-color: ${theme.color.mellow};
`