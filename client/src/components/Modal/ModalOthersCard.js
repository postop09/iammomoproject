import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import testData from '../../database/testData.json';

export default function ModalOthersCard({setIsClicked, cardId}) {
  const modalCloseSec = (e) => {
    if (e.target.tagName === 'ARTICLE') {
      setIsClicked((prev) => !prev); 
    }
  }
  
  return (
    testData.map((data) => {
      if (data.postId === +cardId) {
        return (
          <SecModalShareCard key={data.postId} onClick={modalCloseSec}>
            <WrapShare>
              <WrapColorBox>{data.contents}</WrapColorBox>
              <WrapTxt>
                <TxtTitle>{data.topic}</TxtTitle>
                <TxtDate>{data.createDate}</TxtDate>
              </WrapTxt>
            </WrapShare>
          </SecModalShareCard>
        )
      }
    })
  )
}

const SecModalShareCard = styled.article`
  position: fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;
  background-color: #00000050;
`
const WrapShare = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px 2px #00000050;
  width:80vw;
  height: 50vh;
  padding: 2vw;
  font-family: ${theme.font.basic_font};
  background-color: #ffffff;
  list-style: none;
`
const WrapColorBox = styled.p`
  width: 100%;
  height: 80%;
  margin-bottom: 10px;
  padding: 10px;
  line-height: 1.7rem;
  background-color: ${theme.color.mellow};
`
const WrapTxt = styled.div`
  width: 100%;
  padding: 7px 4px;
  text-align: left;
`
const TxtTitle = styled.strong`
  width: 85%;
  margin-bottom: 3px;
  line-height: 1.3rem;
  font-size: 1.1rem;
  font-weight: 700;
`
const TxtDate = styled.small`
  display: block;
  margin-top: 10px;
  font-size: .9rem;
  color: #6e6e6e;
`