import React from 'react';
import styled from 'styled-components';
import QuestionCard from './QuestionCard';
import testData from '../../database/testData.json';
import theme from '../../theme';

export default function ListQuestionCard({topic, setIsClicked, setCardId}) {
  return (
    <ListShare>
      {testData.map((data) => {
        if (topic === '질문 선택') {
          return (
            <QuestionCard key={data.postId} contents={data.contents} createDate={data.createDate} setIsClicked={setIsClicked} setCardId={setCardId} postId={data.postId} />
          )
        } else if (data.topic === topic) {
          return (
            <QuestionCard key={data.postId} contents={data.contents} createDate={data.createDate} setIsClicked={setIsClicked} setCardId={setCardId} postId={data.postId} />
          )
        }
      })}
    </ListShare>
  )
}

const ListShare = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2vw;
  row-gap: 3vh;
  border-bottom: 2px solid ${theme.color.mellow};
  margin: 35px 0 0;
  padding: 2vh 0;
`