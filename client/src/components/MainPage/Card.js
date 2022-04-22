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
  box-shadow: 1px 2px 3px 0px #00000050;
  border-radius: 5px;
  height: 140px;
  list-style: none;
`
const BtnCards = styled.button`
  height: 100%;
  padding: 0;
  cursor: pointer;
`
const ImgBack = styled.img`
  border-radius: 5px;
  width: 100px;
  height: 100%;
`


