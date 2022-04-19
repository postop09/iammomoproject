import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'

export default function CardList({setIsClicked, setQuestion, listQuestion}) {
  
  const handleClick = () => {
    setIsClicked((prev) => !prev);
    let questionNum = parseInt(Math.random() * listQuestion.length)
    setQuestion(listQuestion[questionNum]);
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


