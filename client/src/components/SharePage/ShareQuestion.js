import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import ListQuestionCard from './ListQuestionCard';
import questionData from '../../database/questionData.json';

export default function ShareQuestion({setIsClicked, setCardId}) {
  const [topic, setTopic] = useState('질문 선택');
  const selectedTopic = (e) => {
    setTopic(e.target.value);
  }

  return (
    <WrapShare>
      <TxtMain>
        <WrapSelect onChange={selectedTopic}>
          <Option value='질문 선택'>질문 선택(전체 보기)</Option>
          {questionData.map((data) => {
            return (
              <Option key={data.id} value={data.topic}>{data.topic}</Option>
            )
          })}
        </WrapSelect>
      </TxtMain>
      <ListQuestionCard topic={topic} setIsClicked={setIsClicked} setCardId={setCardId} />
    </WrapShare>
  )
}

const WrapShare = styled.section`
  padding: 3vh 10px 0;
  font-family: ${theme.font.basic_font};
  text-align: center;
`
const TxtMain = styled.div`
  text-align: center;
`
const WrapSelect = styled.select`
  border: none;
  border-bottom: 2px solid ${theme.color.camel};
  width: 90vw;
  font-size: 1rem;
  text-align: center;
  font-family: ${theme.font.basic_font};
  background-color: transparent;
`
const Option = styled.option`
  font-size: .8rem;
`