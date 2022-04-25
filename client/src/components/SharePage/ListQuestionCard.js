import React from 'react';
import styled from 'styled-components';
import QuestionCard from './QuestionCard';
import theme from '../../theme';
// import testData from '../../database/testData.json';

export default function ListQuestionCard({topic, setIsClicked, setCardId, allPost}) {
  return (
    <ListShare>
      {allPost.map((data) => {
        if (topic === '질문 선택') {
          return (
            <QuestionCard key={data.id} postId={data.id} topic={data.topic} contents={data.content} createDate={data.createAt} setIsClicked={setIsClicked} setCardId={setCardId} />
          )
        } else if (data.topic === topic) {
          return (
            <QuestionCard key={data.id} postId={data.id} topic={data.topic} contents={data.content} createDate={data.createAt} setIsClicked={setIsClicked} setCardId={setCardId} />
          )
        }
      })}
    </ListShare>
  )
}

const ListShare = styled.ul`
  border-bottom: 2px solid ${theme.color.mellow};
  margin: 35px 0 0;
  padding: 2vh 0;
`