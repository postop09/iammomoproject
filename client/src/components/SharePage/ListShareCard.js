import React from 'react';
import styled from 'styled-components';
import testData from '../../database/testData.json';
import theme from '../../theme';
import ShareCard from './ShareCard';
// import axios from 'axios';

export default function ListShareCard({setIsClicked, setCardId}) {
  const newDate = new Date();
  let year = newDate.getUTCFullYear();
  let month = newDate.getUTCMonth() + 1;
  let date = newDate.getUTCDate();
  let today = `${year}-0${month}-${date}`;

  // const fetch = async() => {
  //   const res = await axios.get('http://52.79.45.37:8080/api/topic');
  //   console.log(res);
  // }
  
  return (
    <ListShare>
      {testData.map((data) => {
        if (data.createDate === today) {
          return (
            <ShareCard key={data.postId} dataQuestion={data.topic} setIsClicked={setIsClicked} setCardId={setCardId} id={data.postId} />
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
  max-height: 45vh;
  margin: 40px 0;
  padding: 2vh 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`