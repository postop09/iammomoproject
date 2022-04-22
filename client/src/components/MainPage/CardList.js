import styled from 'styled-components';
import Card from './Card';
import questionData from '../../database/questionData.json';
// import axios from 'axios';
import { useEffect } from 'react';

export default function CardList({setIsClicked, setQuestion, topic, setTopic}) {
  const handleClick = () => {
    setIsClicked((prev) => !prev);
    // 로컬 데이터베이스
    let questionNum = parseInt(Math.random() * questionData.length)
    setQuestion(questionData[questionNum].topic);

    // 서버 API 호출
    // let randomPick = parseInt(Math.random() * topic.length)
    // setQuestion(topic[randomPick].title);
  }
  // const getTopic = async() => {
  //   const res = await axios.get('http://52.79.45.37:8080/api/topic');

  //   res.data.map((topic) => {
  //     setTopic((prev) => [...prev, topic])
  //   })
  // }
  // useEffect(() => {
  //   getTopic();
  // }, []);
  

  return (
      <ListCards onClick={handleClick}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ListCards>
  )
}

const ListCards = styled.ul`
  display: flex;
  overflow-x: scroll;
  column-gap: 2vw;
  margin: 60px 10px 0px;
  padding: 10px 0;
  &::-webkit-scrollbar {
    display: none;
  }
`


