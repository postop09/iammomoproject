import React from 'react';
import styled from 'styled-components';

export default function Card() {
  return (
    <ItemCards>
      <BtnCards>
        <ImgBack src={require('../../assets/img/img_back.jpg')} alt=''/>
      </BtnCards>
    </ItemCards>
  )
}

const ItemCards = styled.li`
  list-style: none;
`
const BtnCards = styled.button`
  padding: 0;
  cursor: pointer;
`
const ImgBack = styled.img`
  border-radius: 5px;
  width: 100px;
  height: 140px;
`


