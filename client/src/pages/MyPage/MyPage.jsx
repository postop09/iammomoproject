import React from 'react'
import styled from 'styled-components'
import MyPost from '../../components/MyPage/MyPost'
import Profile from '../../components/MyPage/Profile'
import theme from '../../theme'

export default function MyPage() {
  const url = 'http://52.79.45.37:8080/api';
  const userId = localStorage.getItem('userId');

  return (
    <WrapMain>
      <Profile userId={userId} url={url} />
      <MyPost userId={userId} url={url} />
    </WrapMain>
  )
}

const WrapMain = styled.main`
  min-height: 100vh;
  background-color: ${theme.color.pantone};
`