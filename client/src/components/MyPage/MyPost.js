import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import MyCards from './MyCards';
import axios from 'axios';
// import testData from '../../database/testData.json';

export default function MyPost({userId, url}) {
  const [topic, setTopic] = useState('내가 작성한 글');
  const [myTopic, setMyTopic] = useState([]);
  const [myPost, setMyPost] = useState([]);
  const selectedTopic = (e) => {
    setTopic(e.target.value);
  }
  const fetchGETuserpost = async() => {
    const res = await axios.get(`${url}/user/${userId}/post`);
    res.data.map((post) => {
        setMyTopic((prev) => [...prev, post.topic]);
        setMyPost((prev) => [...prev, post]);
    })
  }
  useEffect(() => {
    fetchGETuserpost();
  }, [])

  const category = myTopic.filter((element, index) => {
    return myTopic.indexOf(element) === index;
  })
  // useEffect(() => {
  //   testData.map((post) => {
  //     if (post.userId === 1) {
  //       setMyTopic((prev) => [...prev, post.topic])
  //     }
  //   })
  // }, [])

  return (
    <WrapShare>
      <TxtMain>
        <WrapSelect onChange={selectedTopic}>
          <Option value='내가 작성한 글'>내가 작성한 글(전체 보기)</Option>
          {category.map((data) => {
              return (
                <Option key={category.indexOf(data)} value={data}>{data}</Option>
              )
          })}
        </WrapSelect>
      </TxtMain>
      <ListCards>
        {myPost.map((data) => {
          if (topic === '내가 작성한 글') {
            return (
              < MyCards key={data.id} {...data} />
            )
          } else if (data.topic === topic) {
            return (
              < MyCards key={data.id} {...data} />
            )
          }
        })}
      </ListCards>
    </WrapShare>
  )
}

const WrapShare = styled.section`
  padding: 0 10px 0;
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
const ListCards = styled.ul`
  padding: 20px 0 50px;
  list-style: none;
`