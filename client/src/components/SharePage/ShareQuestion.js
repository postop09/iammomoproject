import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import ListQuestionCard from './ListQuestionCard';
import questionData from '../../database/questionData.json';
import axios from 'axios';

export default function ShareQuestion({setIsClicked, setCardId, userId, url}) {
  const [topic, setTopic] = useState('질문 선택');
  const [category, setCategory] = useState([]);
  const [allPost, setAllPost] = useState([])
  const selectedTopic = (e) => {
    setTopic(e.target.value);
  }
  const fetchGETtopic = async() => {
    const res = await axios.get(`${url}/topic`);
    console.log(res);
    res.data.map((topicInfo) => {
      setCategory((prev) => [...prev, topicInfo]);
    })
  }
  const fetchGETpost = async() => {
    const res = await axios.get(`${url}/post`);
    console.log(res);
    res.data.map((post) => {
      setAllPost((prev) => [...prev, post]);
    })
  }
  useEffect(() => {
    fetchGETtopic();
    fetchGETpost();
  }, [])
  
  return (
    <WrapShare>
      <TxtMain>
        <WrapSelect onChange={selectedTopic}>
          <Option value='질문 선택'>질문 선택(전체 보기)</Option>
          {category.map((data) => {
            return (
              <Option key={data.id} value={data.title}>{data.title}</Option>
            )
          })}
        </WrapSelect>
      </TxtMain>
      <ListQuestionCard topic={topic} setIsClicked={setIsClicked} setCardId={setCardId} allPost={allPost} />
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