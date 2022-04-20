import styled from 'styled-components';
import Card from './Card';
import questionData from '../../database/questionData.json';

export default function CardList({setIsClicked, setQuestion}) {
  const handleClick = () => {
    setIsClicked((prev) => !prev);
    let questionNum = parseInt(Math.random() * questionData.length)
    setQuestion(questionData[questionNum].topic);
  }

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
  &::-webkit-scrollbar {
    display: none;
  }
`


