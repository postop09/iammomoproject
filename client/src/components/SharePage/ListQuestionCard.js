import React from 'react';
import styled from 'styled-components';
import QuestionCard from './QuestionCard';
import testData from '../../database/testData.json';
import theme from '../../theme';

export default function ListQuestionCard({topic}) {
  return (
    <ListShare>
      {testData.map((data) => {
        if (topic === '질문 선택') {
          return (
            <QuestionCard key={data.postId} contents={data.contents} createDate={data.createDate} />
          )
        } else if (data.topic === topic) {
          return (
            <QuestionCard key={data.postId} contents={data.contents} createDate={data.createDate} />
          )
        }
      })}
    </ListShare>
  )
}

const ListShare = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2.3vw;
  row-gap: 3vh;
  border-bottom: 2px solid ${theme.color.mellow};
  margin: 40px 0;
  overflow-y: scroll;
`