import React from 'react'
import styled from 'styled-components'
import testData from '../../database/testData.json';
import theme from '../../theme';
import ShareCard from './ShareCard'


export default function ListShareCard() {
  const newDate = new Date();
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let date = newDate.getDate();
  let today = `${year}-0${month}-${date}`;

  return (
    <ListShare>
      {testData.map((data) => {
        if (data.createDate === today) {
          return (
            <ShareCard key={data.postId} dataQuestion={data.topic} />
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
  overflow-y: scroll;
`