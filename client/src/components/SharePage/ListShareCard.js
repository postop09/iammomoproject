import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import testData from '../../database/testData.json';
import theme from '../../theme';
import ShareCard from './ShareCard';
import axios from 'axios';

export default function ListShareCard({setIsClicked, setCardId, userId, url}) {
  const [todayPost, setTodayPost] = useState([])
  const today = new Date().toLocaleDateString();

  // 글 호출
  const fetchGETpost = async() => {
    const res = await axios.get(`${url}/post`);
    console.log(res);
    res.data.map((post) => {
      const serverDay = new Date(post.createAt).toLocaleDateString();
      if (serverDay === today) {
        setTodayPost((prev) => [...prev, post])
      }
    })
  }
  useEffect(() => {
    fetchGETpost();
  }, [])
  
  
  return (
    <ListShare>
      {todayPost.map((data) => {
          return (
            <ShareCard key={data.id} id={data.id} dataQuestion={data.topic} setIsClicked={setIsClicked} setCardId={setCardId} />
          )
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