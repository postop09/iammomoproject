import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import ShareCard from './ShareCard';
import axios from 'axios';
// import testData from '../../database/testData.json';

export default function ListShareCard({setIsClicked, setCardId, url}) {
  const [todayPost, setTodayPost] = useState([])
  const today = new Date().toLocaleDateString();

  // 글 호출
  const fetchGETpost = async() => {
    const res = await axios.get(`${url}/post`);
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
  border-top: 2px solid ${theme.color.mellow};
  border-bottom: 2px solid ${theme.color.mellow};
  max-height: 45vh;
  margin: 20px 0 0;
  padding: 2vh 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`